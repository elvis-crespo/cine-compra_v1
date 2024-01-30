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
            CreateMap<PersonDTO, Person>();
        }
    }
}
