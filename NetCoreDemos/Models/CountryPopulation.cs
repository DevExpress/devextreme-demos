using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class CountryPopulation {
        public string name { get; set; }
        public IEnumerable<CityPopulation> items { get; set; }
    }
}
