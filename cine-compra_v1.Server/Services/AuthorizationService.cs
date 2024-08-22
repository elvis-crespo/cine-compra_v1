using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace cine_compra.Server.Services
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthorizationService(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<ServiceResponse.LoginResponse> Login(LoginDTO loginDTO)
        {
            //Searh the user
            var userFound = await _context.Users.FirstOrDefaultAsync(x =>
                x.Email == loginDTO.Email);

            if (userFound == null)
            {
                return new ServiceResponse.LoginResponse(
                    IsSuccess: false,
                    StatusCode: StatusCodes.Status404NotFound,
                    Message: "User not found."
                );
            }
           

            //With BCrypt we can compare passwords
            if (!BCrypt.Net.BCrypt.Verify(loginDTO.Password, userFound.Password))
            {
                return new ServiceResponse.LoginResponse(
                   IsSuccess: false,
                   StatusCode: StatusCodes.Status401Unauthorized,
                   Message: "Wrong password."
               );

            }

            string tokenCreated = GenerateToken(userFound.Id.ToString());
            string refreshTokenCreated = GenerateRefrestToken();

            return new ServiceResponse.LoginResponse(
                IsSuccess: true,
                StatusCode: StatusCodes.Status200OK,
                Message: "Login successful.",
                Token: tokenCreated,
                RefreshToken: refreshTokenCreated
            );
        }

        public async Task<ServiceResponse.RegisterResponse> Register(UserDTO userDTO)
        {
            var emailRegex = new Regex(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

            // Validate email
            if (!emailRegex.IsMatch(userDTO.Email))
            {
                //De esta manera se instancia un record
                return new ServiceResponse.RegisterResponse(
                    IsSuccess: false,
                    StatusCode:  StatusCodes.Status400BadRequest,
                    Message: "The email format is invalid."
                );
            }

            // Search for the user in the db
            var userFound = await _context.Users.FirstOrDefaultAsync(x => x.Email == userDTO.Email);

            if (userFound != null)
            {
                return new ServiceResponse.RegisterResponse(               
                    IsSuccess: false,
                    StatusCode: StatusCodes.Status409Conflict,
                    Message: "A user with that email already exists."
                );
            }

            //encrypt the key with BCrypt
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(userDTO.Password);


            //create a user
            var user = new User
            {
                UserName = userDTO.UserName,
                Email = userDTO.Email,
                Password = passwordHash
            };
            _context.Add(user);
            await _context.SaveChangesAsync();

            //saves the id of the previously created user
            var userId = user.Id;

            //creates a record in the person table
            var person = new Person
            {
                UserId = userId
            };
            _context.Add(person);
            await _context.SaveChangesAsync();

            return new ServiceResponse.RegisterResponse(
                IsSuccess: true,
                StatusCode: StatusCodes.Status201Created,
                Message: "User created successfully"
            );
        }

     public async Task<AuthorizationResponse> ReturnRefreshToken(RefreshTokenRequest refreshTokenRequest, int idUser)
        {
            var refreshToken = _context.Tokens.FirstOrDefault(x =>
            x.AccessToken == refreshTokenRequest.ExpirationToken &&
            x.RefreshToken == refreshTokenRequest.RefreshToken &&
            x.UserId == idUser);

            if (refreshToken == null)
                return new AuthorizationResponse
                {
                    Result = false,
                    Message = "RefreshToken no found"
                };
            var tokenCreated = GenerateToken(idUser.ToString());
            var refreshTokenCreated = GenerateRefrestToken();

            return await Save(idUser, tokenCreated, refreshTokenCreated);
        }

        //Record historial Token
        private async Task<AuthorizationResponse> Save(int idUser, string token, string refresh)
        {
            var refreshTokenRecord = new Token
            {
                UserId = idUser,
                AccessToken = token,
                RefreshToken = refresh,
                Created = DateTime.UtcNow,
                Expired = DateTime.UtcNow.AddMinutes(2)
            };
            await _context.Tokens.AddAsync(refreshTokenRecord);
            await _context.SaveChangesAsync();

            return new AuthorizationResponse
            {
                Token = token,
                RefrestToken = refresh,
                Result = true,
                Message = "Ok"
            };
        }

        //Token

        public TokenValidationResult TokenValidation(string token) 
        {
            var key = _configuration.GetValue<string>("AppSettings:token");
            var keyBytes = Encoding.UTF8.GetBytes(key);

            try 
            { 
            var tokenHandler = new JwtSecurityTokenHandler();
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
                ValidateIssuer = false,
                ValidateAudience = false,
                //ValidateAudience = true,
                ValidateLifetime = true, 
            }, out SecurityToken validatedToken);

            if(validatedToken is JwtSecurityToken jwtToken)
            {
                if (jwtToken.ValidTo > DateTime.UtcNow)
                {
                    return new TokenValidationResult
                    {
                        IsValid = true,
                    };
                }

            }
            }catch(Exception ex) 
            {
                return new TokenValidationResult
                {
                    IsValid = false,
                };
            }


            return new TokenValidationResult { IsValid = false };
        }


        public string GenerateToken(string idUser) 
        {
            var key = _configuration.GetValue<string>("AppSettings:token");
            var keyBytes = Encoding.UTF8.GetBytes(key);

            var claims = new ClaimsIdentity();
            claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, idUser));//Será la llave

            //Credenciales
            var creds = new SigningCredentials
                (
                    new SymmetricSecurityKey(keyBytes),
                    SecurityAlgorithms.HmacSha256Signature
                );
        
            var tokenDescriptor = new SecurityTokenDescriptor
            { 
                Subject = claims,
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = creds
            };

            //Controladores
            var tokenHandler= new JwtSecurityTokenHandler();
            var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);
            var tokenCreated = tokenHandler.WriteToken(tokenConfig);
            return tokenCreated;
        }

        //Refresh Token
        private string GenerateRefrestToken()
        { 
            var byteData = new byte[64];
            var refreshToken = "";

            using (var rng = RandomNumberGenerator.Create())
            { 
                rng.GetBytes(byteData);
                refreshToken = Convert.ToBase64String(byteData);
            }
            return refreshToken;
        }
    }
}
