using System.ComponentModel.DataAnnotations;

namespace cine_compra_v1.Server.Models.DTOs
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
