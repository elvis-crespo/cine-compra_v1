using AutoMapper;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;

namespace cine_compra.Server.Utilities
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<UserDTO, User>();
            // Map from PersonDTO to Person
            CreateMap<PersonDTO, Person>()
                .ForMember(dest => dest.Id, opt => opt.Ignore()); // Ignorar si no se debe actualizar el Id

            // Map from Person to PersonDTO
            CreateMap<Person, PersonDTO>();
        }
    }
}
