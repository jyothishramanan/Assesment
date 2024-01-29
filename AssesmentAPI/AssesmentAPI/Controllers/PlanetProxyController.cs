using AssesmentAPI.Constants;
using AssesmentAPI.Interface;
using AssesmentAPI.Models;
using AssesmentAPI.Proxy;
using Flurl.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Text.Json;
using static AssesmentAPI.Settings.Settings;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AssesmentAPI.Controllers
{

    [EnableRateLimiting("fixed")]
    [Route("api/[controller]")]
    [ApiController]
    public class PlanetProxyController : ControllerBase
    {
        private readonly string _baseURL;
        private readonly IProxyService _proxyService;
        public PlanetProxyController(IConfiguration configuration, IProxyService proxyService)
        {
            _baseURL = Convert.ToString(configuration[ApiConstants.PlanetUrlSection]);
            _proxyService = proxyService;
        }

        // GET: api/<PlanetController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var data = await _proxyService.GetApiResponseAsync(_baseURL);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<Planet>(data);
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }

        // GET api/<PlanetController>/5
        [HttpGet("GetDetails")]
        public async Task<IActionResult> Get(string url)
        {
            if (string.IsNullOrWhiteSpace(url))
            {
                return BadRequest("Not a valid url!!");
            }

            var data = await _proxyService.GetApiResponseAsync(url);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<PlanetResult>(data);
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
