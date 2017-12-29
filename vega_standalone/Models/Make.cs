using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace vega_standalone.Models {
    public class Make {
        public int Id { get; set; }
        [Required, StringLength(255)]
        public string Name { get; set; }
        // IColleciton to bot use an Index, just return the collection to the client.
        public ICollection<Model> Models { get; set; }

        public Make() {
            Models = new Collection<Model>();
        }
    }
}
