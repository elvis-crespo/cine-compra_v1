using cine_compra.Server.Models.Entities;

namespace cine_compra.Server.Models.DTOs
{
    public class PersonDTO
    {
        public string FullName { get; set; } = string.Empty;
        public string FullSurname { get; set; } = string.Empty;
        public string NumberPhone { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
    }
}
