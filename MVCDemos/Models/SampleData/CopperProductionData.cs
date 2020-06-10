using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<object> CopperProductionData = new[] {
            new { Country = "Chile", Copper = 5700000 },
            new { Country = "United States", Copper = 1220000 },
            new { Country = "Peru", Copper = 1300000 },
            new { Country = "China", Copper = 1650000 },
            new { Country = "Australia", Copper = 990000 },
            new { Country = "Russia", Copper = 930000 },
            new { Country = "DR Congo", Copper = 900000 },
            new { Country = "Finland", Copper = 119000 }
        };
    }
}
