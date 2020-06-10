using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class DoughnutWithCustomLabelInCenterDataItem {
        public string Country { get; set; }
        public string Commodity { get; set; }
        public int Total { get; set; }
    }

    public partial class SampleData {
        public static readonly IEnumerable<DoughnutWithCustomLabelInCenterDataItem>
            DoughnutWithCustomLabelInCenterData = new DoughnutWithCustomLabelInCenterDataItem[] {
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity ="Nuclear", Total = 403195 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Nuclear", Total = 84634 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Thermal", Total = 57471 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Thermal", Total = 419591 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Wind", Total = 21400 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Wind", Total = 78598 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Solar", Total = 8160 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Solar", Total = 38098 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Tidal, Wave", Total = 501 }
        };
    }
}
