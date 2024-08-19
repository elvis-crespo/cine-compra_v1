using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace cine_compra_v1.Server.Services
{
    public interface IUserService
    {
        Task<ServiceResponse.GeneralResponse> UpdateData(PersonDTO personDTO, int id);
    }
}
