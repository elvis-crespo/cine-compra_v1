using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Services;
using cine_compra_v1.Server.Models.DTOs;
using cine_compra_v1.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace cine_compra_v1.Server.Controllers
{
    [Route("api/v1/forgotPassword")]
    public class ForgotPasswordController : Controller
    {

        private readonly ApplicationDbContext _context;
        private readonly IEmailService _emailService;
        private readonly IAuthorizationServices _authorizationServices;

        public ForgotPasswordController(IEmailService emailService, ApplicationDbContext context, IAuthorizationServices authorizationServices)
        {
            _emailService = emailService;
            _context = context;
            _authorizationServices = authorizationServices;
        }

        [HttpPost("sendEmail")]
        public async Task<ActionResult> SendEmailHandler(ForgotPasswordRequest forgotPassword) 
        {
            var dbUser = _context.Users.FirstOrDefault(x =>
                    x.Email == forgotPassword.Email);

            if (dbUser is null) 
            {
                return NotFound("User not found!");
            }

            var userEmail = dbUser.Email;
            var userId = dbUser.Id;
            
            var token = _authorizationServices.GenerateToken(userId.ToString());

            await _emailService.SendEmail
            (
                 userEmail,
                 "Reset password",
                 $"Your code is : {token}"
            );

            return Ok("Email sent successfully");
        }

        [HttpPost("verifityEmail")]
        public async Task<ActionResult> VerifityEmailHandler(string token) 
        {
            var isValid = _authorizationServices.TokenValidation(token);

            if (!isValid.IsValid) 
                return Unauthorized("Token Invalid");

            return Ok("Tken verificado correcty");
        }

        [HttpPost("updatePassword")]
        public async Task<ActionResult> UpdatePassword(ResetPasswordDTO resetPassword)
        {
            var dbUser = _context.Users.FirstOrDefault(x =>
                x.Email == resetPassword.Email);

            if (dbUser is null) 
            { 
                return NotFound("User not Found!");
            }


            if (!resetPassword.Password.Equals(resetPassword.ConfirmPassword))
            {
                return BadRequest("Passwords do not match!");
            }

            string passwordHash = BCrypt.Net.BCrypt.HashPassword(resetPassword.Password);
            dbUser.Password = passwordHash;

            await _context.SaveChangesAsync();
            return Ok("Your password has been reset");
        }

    }
}
