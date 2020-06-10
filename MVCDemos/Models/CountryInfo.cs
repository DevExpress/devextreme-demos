using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class CountryInfo : Details {
        public bool? Expanded { get; set; }
        public bool? Selected { get; set; }
        public string GDP { get; set; }
        public string FullName { get; set; }
        public IEnumerable<CityInfo> Cities { get; set; }
    }
}
