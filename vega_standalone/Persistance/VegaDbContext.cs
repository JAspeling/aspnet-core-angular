using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega_standalone.Models;

namespace vega_standalone.Persistance {
    public class VegaDbContext : DbContext {
        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features { get; set; }

        // System.Configuration.ConfigurationManager - Used to connect to the Database
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options) {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            // Key for this entity (VehicleFeature) has these two properties (VehicleId & FeatureId)
            modelBuilder.Entity<VehicleFeature>().HasKey(vf => new { vf.VehicleId, vf.FeatureId });
            base.OnModelCreating(modelBuilder);
        }
    }
}
