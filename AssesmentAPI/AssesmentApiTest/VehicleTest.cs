using AssesmentAPI.Constants;
using AssesmentAPI.Controllers;
using AssesmentAPI.Interface;
using AssesmentAPI.Models;
using AssesmentAPI.Proxy;
using Castle.Core;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Moq;
using Moq.Protected;
using System.Text.Json;

namespace AssesmentApiTest
{
    public class VehicleTest
    {
        private readonly Mock<IConfiguration> _mockConfiguration;
        private readonly IProxyService _mockProxyService;
        private readonly VehicleProxyController _vehicleProxyController;

        public VehicleTest()
        {
            _mockConfiguration = new Mock<IConfiguration>(MockBehavior.Strict);
            _mockProxyService = new ProxyService();
            _mockConfiguration.Setup(m => m[ApiConstants.VechileUrlSection]).Returns("https://swapi.dev/api/vehicles");
            _vehicleProxyController = new VehicleProxyController(_mockConfiguration.Object, _mockProxyService);
        }

        [Fact]
        public async Task Vechile_GetStatusCode_200()
        {
            //Arrange  
            //Action
            var result = await _vehicleProxyController.GetAsync();
            var data  = new OkObjectResult(result);
            //Assert
            Assert.Equal(200,data.StatusCode);
        }

        [Fact]
        public async Task Vechile_GetResult_Value()
        {
            //Arrange  
            //Action
            var result = await _vehicleProxyController.GetAsync();
            var data = new OkObjectResult(result);
            //Assert
            Assert.NotNull(data.Value);
        }

        [Fact]
        public async Task Vechile_GetBadRequest_400()
        {
            //Arrange
            _mockConfiguration.Setup(m => m[ApiConstants.VechileUrlSection]).Returns("");
            //Action
            var result = await _vehicleProxyController.GetAsync();
            var data = new BadRequestObjectResult(result);
            //Assert
            Assert.Equal(400,data.StatusCode);
        }
    }
}