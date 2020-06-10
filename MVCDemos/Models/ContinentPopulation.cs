using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class ContinentPopulation {
        public string name { get; set; }
        public IEnumerable<CountryPopulation> items { get; set; }
    }
}
