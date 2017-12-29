using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega_standalone.Controllers.Resources;
using vega_standalone.Models;
using vega_standalone.Persistance;

namespace vega_standalone.Controllers {
    [Route("api/[controller]")]
    public class MakesController : Controller {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;

        public MakesController(VegaDbContext context, IMapper mapper) {
            this.context = context;
            this.mapper = mapper;
        }
        

        [HttpGet("/api/makes")]
        public  IEnumerable<MakeResource> GetMakes() {
            var makes = context.Makes.Include(m => m.Models).ToList(); 
            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}
