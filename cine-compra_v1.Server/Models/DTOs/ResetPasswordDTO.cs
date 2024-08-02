using System.ComponentModel.DataAnnotations;

namespace cine_compra_v1.Server.Models.DTOs
{
    public class ResetPasswordDTO
    {

        [Required]
        public string Token { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty!;

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty!;

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; } = string.Empty!;
    }
}
