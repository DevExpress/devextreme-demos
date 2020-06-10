using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class ContinentInfo {
        public string ID { get; set; }
        public string Text { get; set; }
        public bool? Expanded { get; set; }
        public bool? Selected { get; set; }
        public IEnumerable<CountryInfo> Items { get; set; }
    }
}
