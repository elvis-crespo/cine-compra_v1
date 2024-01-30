using System.ComponentModel.DataAnnotations;

namespace cine_compra.Server.Models.Entities
{
    public class Person
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string FullSurname { get; set; } = string.Empty;
        public string NumberPhone { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;

        //Navegation
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
