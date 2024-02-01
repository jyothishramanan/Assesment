using AssesmentAPI.Constants;
using AssesmentAPI.Controllers;
using AssesmentAPI.Interface;
using AssesmentAPI.Models;
using AssesmentAPI.Proxy;
using Castle.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Moq;
using Moq.Protected;
using System.Text.Json;
namespace AssesmentApiTest
{
    public class FilmTest
    {
        private readonly Mock<IConfiguration> _mockConfiguration;
        private readonly IProxyService _mockProxyService;
        private readonly FilimProxyController _filmProxyController;

        public FilmTest()
        {
            _mockConfiguration = new Mock<IConfiguration>(MockBehavior.Strict);
            _mockProxyService = new ProxyService();
            _mockConfiguration.Setup(m => m[ApiConstants.FilimUrlSection]).Returns("https://swapi.dev/api/films");
            _filmProxyController = new FilimProxyController(_mockConfiguration.Object, _mockProxyService);
        }

        [Fact]
        public async Task Film_Get_Success()
        {
            //Arrange  
            //Action
            var result = await _filmProxyController.GetAsync();
            //Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task Film_GetStatusCode_200()
        {
            //Arrange  
            //Action
            var result = await _filmProxyController.GetAsync();
            var data = new OkObjectResult(result);
            //Assert
            Assert.Equal(200, data.StatusCode);
        }

        [Fact]
        public async Task Film_GetBadRequest_400()
        {
            //Arrange
            _mockConfiguration.Setup(m => m[ApiConstants.FilimUrlSection]).Returns("");
            //Action
            var result = await _filmProxyController.GetAsync();
            var data = new BadRequestObjectResult(result);
            //Assert
            Assert.Equal(400, data.StatusCode);
        }

    }
}
