using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega_standalone.Controllers.Resources;
using vega_standalone.Models;

namespace vega_standalone.Controllers {
    [Route("/api/vehicles")]
    public class VehiclesController : Controller {
        private readonly IMapper mapper;

        public VehiclesController(IMapper mapper) {
            this.mapper = mapper;
        }

        [HttpPost]
        public IActionResult CreateVehicle([FromBody] VehicleResource vehicleResource) {
            // Serialise the object as JSON and return an HTTP request of OK (200)
            var vehicle = mapper.Map<VehicleResource, Vehicle>(vehicleResource);
            return Ok(vehicle);
        }
    }
}
