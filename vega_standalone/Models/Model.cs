using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace vega_standalone.Models {
    [Table("Models")]
    public class Model {
        public int Id { get; set; }
        [Required, StringLength(255)]
        public string Name { get; set; }

        // navigation Property, causes circular reference issue (Fixed by making use of a ModelResource)
        public Make Make { get; set; }

        // Foreign Key Property - simplify for creating and updting objects in the future.
        public int MakeId { get; set; }

    }
}
