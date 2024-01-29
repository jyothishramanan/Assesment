using AssesmentAPI.Constants;
using AssesmentAPI.Interface;
using AssesmentAPI.Models;
using Flurl;
using Flurl.Http;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Text.Json;
using static AssesmentAPI.Settings.Settings;
using static System.Net.WebRequestMethods;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AssesmentAPI.Controllers
{
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [EnableRateLimiting("fixed")]
    [ApiController]
    public class PeopleAggregateController : ControllerBase
    {
        private readonly string _baseURL;
        private readonly IProxyService _proxyService;
        public PeopleAggregateController(IConfiguration configuration, IProxyService proxyService)
        {
            _baseURL = Convert.ToString(configuration[ApiConstants.PeopleUrlSection]);
            _proxyService = proxyService;
        }
        // GET: api/<PeopleController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            AggregatePeople aggregatePeople=new AggregatePeople();
            aggregatePeople.vehicleResult = new List<VehicleResult>();
            aggregatePeople.filimResult = new List<FilimResult>();
            var data = await _proxyService.GetApiResponseAsync(_baseURL);
            if (!string.IsNullOrWhiteSpace(data))
            {
                People response = JsonConvert.DeserializeObject<People>(data);
                foreach (var item in response.results)
                {
                    foreach (var vehicle in item.vehicles)
                    {
                        var vehicleJson = await _proxyService.GetApiResponseAsync(vehicle);
                        var vehicleData = JsonConvert.DeserializeObject<VehicleResult>(vehicleJson);
                        aggregatePeople.vehicleResult.Add(vehicleData);

                    }
                    foreach (var film in item.films)
                    {
                        //var filmJson = await _proxyService.GetApiResponseAsync(film);
                        //var filmData = JsonConvert.DeserializeObject<FilimResult>(filmJson);
                        //aggregatePeople.filimResult.Add(filmData);

                    }
                }
               // aggregatePeople.people = response;
                
                return Ok(aggregatePeople);
            }
            else
            {
                return BadRequest();
            }
        }

        // GET api/<PeopleController>/5
        [HttpGet("GetDetails")]
        public async Task<IActionResult> Get(string url)
        {
            AggregatePeople aggregatePeople = new AggregatePeople();
            aggregatePeople.vehicleResult = new List<VehicleResult>();
            aggregatePeople.filimResult = new List<FilimResult>();
            if (string.IsNullOrWhiteSpace(url))
            {
                return BadRequest("Not a valid url!!");
            }

            var data = await _proxyService.GetApiResponseAsync(url);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<PeopleResult>(data);
               
                    foreach (var vehicle in response.vehicles)
                    {
                        var vehicleJson = await _proxyService.GetApiResponseAsync(vehicle);
                        var vehicleData = JsonConvert.DeserializeObject<VehicleResult>(vehicleJson);
                        aggregatePeople.vehicleResult.Add(vehicleData);

                    }
                    foreach (var film in response.films)
                    {
                        var filmJson = await _proxyService.GetApiResponseAsync(film);
                        var filmData = JsonConvert.DeserializeObject<FilimResult>(filmJson);
                        aggregatePeople.filimResult.Add(filmData);

                    }
                aggregatePeople.people = response;
                return Ok(aggregatePeople);
            }
            else
            {
                return BadRequest();
            }

        }

    }
}
