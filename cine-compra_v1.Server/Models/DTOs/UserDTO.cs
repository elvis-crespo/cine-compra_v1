using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace cine_compra.Server.Models.DTOs
{
    public class UserDTO 
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;


    }
}
