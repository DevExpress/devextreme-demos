using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class GeoInfo {
        public string ID { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }

        public IEnumerable<GeoInfo> Items { get; set; }
    }
}
