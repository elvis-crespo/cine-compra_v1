﻿using AutoMapper;
using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace cine_compra.Server.Controllers
{
    [Route("api/v1/auth")]
    public class AuthController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        private readonly IAuthorizationService _authorizationService;
        private readonly IMapper _mapper;

        public AuthController(ApplicationDbContext context, IAuthorizationService authorizationService, IMapper mapper)
        {
            _context = context;
            _authorizationService = authorizationService;
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
        public async Task<ActionResult> RegisterHandle(UserDTO userDTO)
        {
            var response = await _authorizationService.Register(userDTO);
    
            if (response.IsSuccess)
            {
                return StatusCode(response.StatusCode, new { message = response.Message});
            }
    
            return StatusCode(response.StatusCode, new { message = response.Message });
        }


        [HttpPost("login")]
        public async Task<AuthorizationResponse> LoginHandle(LoginDTO loginDTO)
        {
            return await _authorizationService.ReturnToken(loginDTO);
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

            var authoResponse = await _authorizationService.ReturnRefreshToken(refreshTokenRequest, int.Parse(idUser));

            if (authoResponse.Result)
                return Ok(authoResponse);
            else
                return BadRequest(new AuthorizationResponse { Result = false, Message = "Ha ocurrido un error" });
        }

    }
}