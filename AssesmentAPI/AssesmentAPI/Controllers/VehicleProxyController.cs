using AssesmentAPI.Constants;
using AssesmentAPI.Interface;
using AssesmentAPI.Models;
using Flurl;
using Flurl.Http;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Text.Json;
using static AssesmentAPI.Settings.Settings;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AssesmentAPI.Controllers
{

    [EnableRateLimiting("fixed")]
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleProxyController : ControllerBase
    {
        private readonly string _baseURL;
        private readonly IProxyService _proxyService;
        public VehicleProxyController(IConfiguration configuration, IProxyService proxyService)
        {
            _baseURL = Convert.ToString(configuration[ApiConstants.VechileUrlSection]);
            _proxyService = proxyService;
        }
        // GET: api/<ProxyController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var data = await _proxyService.GetApiResponseAsync(_baseURL);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<Vehicle>(data);
                return Ok(response);
            }
            else 
            {
                return BadRequest();
            }
        }
        [HttpGet("GetDetails")]
        public async Task<IActionResult> Get(string url)
        {
            if(string.IsNullOrWhiteSpace(url))
            { 
               return BadRequest("Not a valid url!!");
            }

            var data = await _proxyService.GetApiResponseAsync(url);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<VehicleResult>(data);
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
