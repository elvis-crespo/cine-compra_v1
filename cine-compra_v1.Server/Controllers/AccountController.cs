using AutoMapper;
using BCrypt.Net;
using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using cine_compra.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Extensions;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;

namespace cine_compra.Server.Controllers
{
    public class AccountController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        private readonly IAuthorizationServices _authorizationServices;
        private readonly IMapper _mapper;

        public AccountController(ApplicationDbContext context, IAuthorizationServices authorizationServices, IMapper mapper)
        {
            _context = context;
            _authorizationServices = authorizationServices;
            _mapper = mapper;
        }

        //[HttpPost("registerc")]
        //public async Task<ActionResult> Registervq(UserDTO userDTO)
        //{
        //    string passwordHash = BCrypt.Net.BCrypt.HashPassword(userDTO.Password);
        //    var user = _mapper.Map<User>(userDTO);

        //    _context.Add(user);
        //    await _context.SaveChangesAsync();
        //    return Ok(user);
        //}

        [HttpPost("register")]
        public async Task<ActionResult> Register(UserDTO userDTO)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(userDTO.Password);

            var user = new User
            {

                UserName = userDTO.UserName,
                Email = userDTO.Email,
                Password = passwordHash
            };
            _context.Add(user);
            await _context.SaveChangesAsync();

            var userId = _context.Users.Find(user.Id);
            var per = new Person
            {
                UserId = userId.Id,

            };
            _context.Add(per);
            await _context.SaveChangesAsync();
            return Ok(user);
        }


       // [HttpPost("login")]
        //public async Task<ActionResult> Login(LoginDTO loginDTO)
        //{
        //    var usuarioEncontrado = _context.Users.FirstOrDefault(
        //        u => u.Email == loginDTO.Email);
        //    //u.Password == loginDTO.Password);

        //    if (!BCrypt.Net.BCrypt.Verify(loginDTO.Password, usuarioEncontrado?.Password))
        //        return BadRequest("Wrong password.");

        //    if (usuarioEncontrado == null)
        //    {
        //        return BadRequest("User not found");
        //    }
        //    //return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok", response = "SuccessLogin" });

        //    return StatusCode(StatusCodes.Status200OK,await _authorizationServices.ReturnToken(loginDTO));
        //}

        [HttpPost("login")]
        public async Task<AuthorizationResponse> LoginV2(LoginDTO loginDTO)
        {
            return await _authorizationServices.ReturnToken(loginDTO);

        }


        [HttpPost]
        [Route("GetRefreshToken")]
        public async Task<IActionResult> GetRefreshToken([FromBody] RefreshTokenRequest refreshTokenRequest)
        { 
            var tokenHandler = new JwtSecurityTokenHandler();
            var possibleExpiredToken = tokenHandler.ReadJwtToken(refreshTokenRequest.ExpirationToken);

            if (possibleExpiredToken.ValidTo > DateTime.UtcNow)
                return BadRequest(new AuthorizationResponse
                {
                    Result = false,
                    Message = "Su token aún no expira"
                });

            string idUser = possibleExpiredToken.Claims.First(x =>
                x.Type == JwtRegisteredClaimNames.NameId).Value.ToString();

            var authoResponse = await _authorizationServices.ReturnRefreshToken(refreshTokenRequest, int.Parse(idUser));

            if (authoResponse.Result)
                return Ok(authoResponse);
            else
                return BadRequest(new AuthorizationResponse { Result = false, Message = "Ha ocurrido un error" });
        }


        //[HttpPut("update-data")]
        //public async Task<ActionResult<List<Person>>> UpdatePerson(PersonDTO updatePersonDTO)
        //{
        //    var dbPerson = await _context.Persons.FindAsync(updatePersonDTO.Id);

        //    if (dbPerson is null) return NotFound("Person not found");

        //    dbPerson.FullName = updatePersonDTO.FullName;
        //    dbPerson.FullSurname = updatePersonDTO.FullSurname;
        //    dbPerson.NumberPhone = updatePersonDTO.NumberPhone;
        //    dbPerson.City = updatePersonDTO.City;
        //    dbPerson.Location = updatePersonDTO.Location;

        //    await _context.SaveChangesAsync();

        //    //return Ok(await _context.Persons.ToListAsync());
        //    return Ok(await _context.Persons.FindAsync(updatePersonDTO.Id));
        //}


        [HttpPut("update")]
        public async Task<ActionResult<List<Person>>> Update(PersonDTO personDTO)
        {
            var dbPerson = _context.Persons.FirstOrDefault(x =>
            x.User.Id == personDTO.Id);

            if (dbPerson is null) return NotFound("Person not found");

            dbPerson.FullName = personDTO.FullName;
            dbPerson.FullSurname = personDTO.FullSurname;
            dbPerson.NumberPhone = personDTO.NumberPhone;
            dbPerson.City = personDTO.City;
            dbPerson.Location = personDTO.Location;

            await _context.SaveChangesAsync();

            return Ok(await _context.Persons.ToListAsync());
        }


        //Get con data relacionada
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Person>> GetSelect(int id)
        {
            var persona = await _context.Persons
                .Include(p => p.User)
                .Include(p => p.User.Tokens)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (persona is null)
            {
                return NotFound();
            }
            return persona;
        }

        [HttpGet("/data{id:int}")]
        public async Task<ActionResult<User>> GetSelectUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.Person)
                .FirstOrDefaultAsync(u =>u.Id == id);

            if (user is null)
            {
                return NotFound();
            }
            return user;
        }

    }
}
