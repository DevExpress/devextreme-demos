using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models.SampleData {

    public class DoughnutWithCustomLabelInCenterDataItem {
        public string Country { get; set; }
        public string Commodity { get; set; }

        public int Total { get; set; }
    }
    public partial class SampleData {
        public static readonly IEnumerable<DoughnutWithCustomLabelInCenterDataItem>
            DoughnutWithCustomLabelInCenterData = new DoughnutWithCustomLabelInCenterDataItem[] {
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Nuclear", Total = 413278 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Nuclear", Total = 76536 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Thermal", Total = 47594 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Thermal", Total = 375809 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Wind", Total = 21033 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Wind", Total = 58228 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Solar", Total = 7274 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "Germany", Commodity = "Solar", Total = 37520 },
           new DoughnutWithCustomLabelInCenterDataItem() { Country = "France", Commodity = "Tidal, Wave", Total = 618 }
        };
    }
}
