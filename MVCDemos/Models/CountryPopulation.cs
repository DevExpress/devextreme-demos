using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class CountryPopulation {
        public string name { get; set; }
        public IEnumerable<CityPopulation> items { get; set; }
    }
}
