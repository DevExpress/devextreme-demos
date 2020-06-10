using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class ContinentPopulation {
        public string name { get; set; }
        public IEnumerable<CountryPopulation> items { get; set; }
    }
}
