using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega_standalone.Models;
using vega_standalone.Persistance;

namespace vega_standalone.Controllers {
    [Route("/api/[controller]")]
    public class FeaturesController : Controller {
        private readonly VegaDbContext context;

        public FeaturesController(VegaDbContext context) {
            this.context = context;
        }

        public IEnumerable<Feature> GetFeatures() {
            var features = context.Features;
            return features;
        }
    }
}
