using System;
using System.Collections.Generic;
using System.Linq;

namespace AspNetCoreDemos.DemoShell {
    public class DemoGroup {
        public string Name { get; set; }
        public bool Breadcrumb { get; set; }
        public List<Demo> Demos { get; set; }
        public List<DemoGroup> Groups { get; set; }
    }
}
