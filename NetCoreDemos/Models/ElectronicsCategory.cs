using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.NETCore.Demos.Models {
    public class ElectronicsCategory {
        public string Name { get; set; }
        public IEnumerable<ElectronicsGroupedItem> Products { get; set; }
    }
}
