using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega_standalone.Models;

namespace vega_standalone.Persistance {
    public class VegaDbContext  : DbContext {
        // System.Configuration.ConfigurationManager
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options) {

        }

        public DbSet<Make> Makes { get; set; }
    }
}
