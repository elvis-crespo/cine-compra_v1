using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations;

namespace cine_compra.Server.Models.Entities
{
    public class User 
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        //Navigate
        public Person? Person { get; set; }
        public ICollection<Token> Tokens { get; } = new List<Token>();
    }
}
