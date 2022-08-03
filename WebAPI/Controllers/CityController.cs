using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext context;

        public CityController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities =await context.Cities.ToListAsync();
            return Ok(cities);
        }
       
        [HttpPost("add/{cityname}")]
        public async Task<IActionResult> AddCity(string cityName)
        {
            City city = new City { Name = cityName };
            await context.Cities.AddAsync(city);
            await context.SaveChangesAsync();
            return Ok(city);
        }
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            await context.Cities.AddAsync(city);
            await context.SaveChangesAsync();
            return Ok(city);
        }

    }
}
