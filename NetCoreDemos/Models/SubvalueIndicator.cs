using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    public class SubvalueIndicator {
        public string Name { get; set; }
        public double Primary { get; set; }
        public IEnumerable<double> Secondary { get; set; }
    }
}
