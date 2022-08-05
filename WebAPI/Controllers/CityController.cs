using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Data.Repos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
       
        private readonly IUnitOfWork uow;

        public CityController(IUnitOfWork uow)
        {
            
            this.uow = uow;
           
        }
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            //var cities =await context.Cities.ToListAsync();
            //return Ok(cities);
            var cities = await uow.CityRepository.GetCitiesAsync();
            return Ok(cities);
        }
       
        //[HttpPost("add/{cityname}")]
        //public async Task<IActionResult> AddCity(string cityName)
        //{
        //    City city = new City { Name = cityName };
        //    await context.Cities.AddAsync(city);
        //    await context.SaveChangesAsync();
        //    return Ok(city);
        //}
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            //await context.Cities.AddAsync(city);
            //await context.SaveChangesAsync();
            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);

        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }

    }
}
