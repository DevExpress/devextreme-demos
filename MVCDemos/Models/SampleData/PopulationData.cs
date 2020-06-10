using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<object> PopulationData = new[] {
            new { Region = "Asia", Val = 4119626293L },
            new { Region = "Africa", Val = 1012956064L },
            new { Region = "Northern America", Val = 344124520L },
            new { Region = "Latin America and the Caribbean", Val = 590946440L },
            new { Region = "Europe", Val = 727082222L },
            new { Region = "Oceania", Val = 35104756L }
        };
    }
}
