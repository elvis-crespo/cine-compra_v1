
using cine_compra_v1.Server.Models.DTOs;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Net;
using System.Net.Mail;

namespace cine_compra_v1.Server.Services
{
    public class EmailService : IEmailService
    {

        private readonly EmailSettings _emailSettings;

        public EmailService(IOptions<EmailSettings> emailSettings) => _emailSettings = emailSettings.Value;

        public async Task SendEmail(string to, string subject, string message)
        {
            using var client = new SmtpClient
            {
                Host = _emailSettings.Host,
                Port = _emailSettings.Port,
                EnableSsl = _emailSettings.EnableSsl,
                Credentials = new NetworkCredential(_emailSettings.Username, _emailSettings.Password)
            };

            var mailMsg = new MailMessage
            {
                From = new MailAddress(_emailSettings.Username),
                Subject = subject,
                Body = message
            };

            mailMsg.To.Add(to);

            await client.SendMailAsync(mailMsg);
        }

        public TokenValidationResult VerifityEmail()
        {
            //var key = _configuration.GetValue<string>("AppSettings:token");
            //var keyBytes = Encoding.UTF8.GetBytes(key);
            return null;
        }
    }
}
