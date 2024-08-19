using AutoMapper;
using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cine_compra_v1.Server.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UserService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ServiceResponse.GeneralResponse> UpdateData(PersonDTO personDTO, int id)
        {
            var personContext = await _context.Persons.FirstOrDefaultAsync(x => x.Id == id);
            if (personContext == null)
            {
                return new ServiceResponse.GeneralResponse(
                    Flag: false,
                    Message: "User not found."
                );
            }

            var updatePerson = _mapper.Map(personDTO, personContext);
            //updatePerson.Id = id;
            _context.Update(updatePerson);
            await _context.SaveChangesAsync();

            //var allPersons = await _context.Persons.ToListAsync();

            return new ServiceResponse.GeneralResponse(
                    Flag: true,
                    Message: "User data has been updated successfully."
            );
        }
    }
}
