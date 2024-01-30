using System.Reflection.Metadata;

namespace cine_compra.Server.Models.Entities
{
    public class Token
    {
        public int Id { get; set; }
        public string AccessToken { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime? Created { get; set; }
        public DateTime? Expired { get; set; }
        public bool IsActive { get; set; }

        //Navegate
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
