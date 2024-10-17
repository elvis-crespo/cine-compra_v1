using AutoMapper;
using cine_compra.Server.Context;
using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using cine_compra_v1.Server.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cine_compra_v1.Server.Controllers
{
    [Route("api/v1/account")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public AccountController(ApplicationDbContext context, IMapper mapper, IUserService userService)
        {
            _context = context;
            _mapper = mapper;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Get() 
        {
            return Redirect("https://www.youtube.com/");
        }

        [HttpPut("update-data/{id}")]
        public async Task<ActionResult<Person>> UpdateDataHandle(PersonDTO personDTO, int id)
        {
            var response = await _userService.UpdateData(personDTO, id);

            if (response.Flag)
            {
                return StatusCode(StatusCodes.Status200OK, new { message = response.Message });
            }

            return StatusCode(StatusCodes.Status400BadRequest, new { message = response.Message });
        }


        //Get con data relacionada
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Person>> GetSelect(int id)
        {
            var persona = await _context.Persons
                .Include(p => p.User)
                .Include(p => p.User.Tokens)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (persona is null)
            {
                return NotFound();
            }
            return persona;
        }

        [HttpGet("data{id:int}")]
        public async Task<ActionResult<User>> GetSelectUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.Person)
                .FirstOrDefaultAsync(u => u.Id == id);

            if (user is null)
            {
                return NotFound();
            }
            return user;
        }

    }
}
