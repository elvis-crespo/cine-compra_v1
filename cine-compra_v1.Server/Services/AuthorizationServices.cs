using Azure.Core;
using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using static cine_compra.Server.Models.DTOs.ServiceResponse;

namespace cine_compra.Server.Services
{
    public class AuthorizationServices : IAuthorizationServices
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthorizationServices(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }


        //if (userDTO is null) return new GeneralResponse(false, "Debe llenar los campos requeridos");
        //var newUser = new User
        //{
        //    UserName = userDTO.UserName,
        //    Email = userDTO.Email,
        //    PasswordHash = userDTO.Password,
        //};

        //var user = await userManager.FindByEmailAsync(newUser.Email);
        //if (user is not null) return new GeneralResponse(false, "El correo ya es usudo por otro usuario");

        //var createUser = await userManager.CreateAsync(newUser!, userDTO.Password);
        //if (!createUser.Succeeded) return new GeneralResponse(false, "Ha ocurrido un erros, vuelve a intentar");
        //return new GeneralResponse(true, "Account Created");

        
        //    var usuarioEncontrado = _context.Users.FirstOrDefault(
        //           u => u.Email == loginDTO.Email);
        //        //u.Password == loginDTO.Password);

        //        if (!BCrypt.Net.BCrypt.Verify(loginDTO.Password, usuarioEncontrado?.Password))
        //            return BadRequest("Wrong password.");

        //        if (usuarioEncontrado == null)
        //        {
        //            return BadRequest("User not found");
        //}
        //        //return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok", response = "SuccessLogin" });

        //        return StatusCode(StatusCodes.Status200OK, await _authorizationServices.ReturnToken(loginDTO));


        public async Task<AuthorizationResponse> ReturnToken(LoginDTO loginAuth)
        {
            
            var userFound = _context.Users.FirstOrDefault(x => x.Email == loginAuth.Email);
            if (userFound == null)
            {
                return new AuthorizationResponse
                {
                    Result = false,
                    Message = "User not found"
                };
            }

            if (!BCrypt.Net.BCrypt.Verify(loginAuth.Password, userFound.Password))
            {
                return new AuthorizationResponse
                {
                    Result = false,
                    Message = "Wrong password."
                };
            }

            string tokenCreated =  GenerateToken(userFound.Id.ToString());

            //return new AuthorizationResponse
            //{
            //    Token = tokenCreated,
            //    RefrestToken = tokenCreated, // I corrected the typo in "RefrestToken"
            //    Result = true,
            //    Message = "Created token"
            //};

            string refreshTokenCreated = GenerateRefrestToken();

            return await Save(userFound.Id, tokenCreated, refreshTokenCreated);
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
        private string GenerateToken(string idUser) 
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
