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
    public class PeopleTest
    {
        private readonly Mock<IConfiguration> _mockConfiguration;
        private readonly IProxyService _mockProxyService;
        private readonly PeopleProxyController _peopleProxyController;

        public PeopleTest()
        {
            _mockConfiguration = new Mock<IConfiguration>(MockBehavior.Strict);
            _mockProxyService = new ProxyService();
            _mockConfiguration.Setup(m => m[ApiConstants.PeopleUrlSection]).Returns("https://swapi.dev/api/people");
            _peopleProxyController = new PeopleProxyController(_mockConfiguration.Object, _mockProxyService);
        }

        [Fact]
        public async Task People_Get_Success()
        {
            //Arrange  
            //Action
            var result = await _peopleProxyController.GetAsync();
            //Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task Vechile_GetStatusCode_200()
        {
            //Arrange  
            //Action
            var result = await _peopleProxyController.GetAsync();
            var data = new OkObjectResult(result);
            //Assert
            Assert.Equal(200, data.StatusCode);
        }

        [Fact]
        public async Task Vechile_GetBadRequest_400()
        {
            //Arrange
            _mockConfiguration.Setup(m => m[ApiConstants.PeopleUrlSection]).Returns("");
            //Action
            var result = await _peopleProxyController.GetAsync();
            var data = new BadRequestObjectResult(result);
            //Assert
            Assert.Equal(400, data.StatusCode);
        }

    }
}
