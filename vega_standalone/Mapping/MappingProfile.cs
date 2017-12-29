using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega_standalone.Controllers.Resources;
using vega_standalone.Models;

namespace vega_standalone.Mapping {
    public class MappingProfile : Profile {

        public MappingProfile() {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
        }
    }
}
