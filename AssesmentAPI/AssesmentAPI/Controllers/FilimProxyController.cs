using AssesmentAPI.Constants;
using AssesmentAPI.Interface;
using AssesmentAPI.Models;
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
    public class FilimProxyController : ControllerBase
    {
        private readonly string _baseURL;
        private readonly IProxyService _proxyService;
        public FilimProxyController(IConfiguration configuration, IProxyService proxyService)
        {
            _baseURL = Convert.ToString(configuration[ApiConstants.FilimUrlSection]);
            _proxyService = proxyService;
        }
        // GET: api/<PeopleController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var data = await _proxyService.GetApiResponseAsync(_baseURL);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<Filim>(data);
                return Ok(response);
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
            if (string.IsNullOrWhiteSpace(url))
            {
                return BadRequest("Not a valid url!!");
            }

            var data = await _proxyService.GetApiResponseAsync(url);
            if (!string.IsNullOrWhiteSpace(data))
            {
                var response = JsonConvert.DeserializeObject<FilimResult>(data);
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }

        }

    }
}
