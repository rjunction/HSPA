using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Data.Repos;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
       
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow,IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            //var cities =await context.Cities.ToListAsync();
            //return Ok(cities);

           
            var cities = await uow.CityRepository.GetCitiesAsync();

            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            //var citiesDto = from c in cities
            //                select new CityDto { Id = c.Id, Name = c.Name };


            return Ok(citiesDto);
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
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            //await context.Cities.AddAsync(city);
            //await context.SaveChangesAsync();
            //City city = new City
            //{
            //    Name = cityDto.Name,
            //    LastUpdatedBy = "1",
            //    LastUpdatedOn = DateTime.Now
            //};
            City city=mapper.Map<City>(cityDto);

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
