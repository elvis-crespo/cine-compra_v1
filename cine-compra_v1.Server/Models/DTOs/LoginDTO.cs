using System.ComponentModel.DataAnnotations;

namespace cine_compra.Server.Models.DTOs
{
    public class LoginDTO
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
