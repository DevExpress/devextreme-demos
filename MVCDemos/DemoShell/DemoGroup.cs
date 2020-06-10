using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.DemoShell {
    public class DemoGroup {
        public string Name { get; set; }
        public bool Breadcrumb { get; set; }
        public List<Demo> Demos { get; set; }
        public List<DemoGroup> Groups { get; set; }
    }
}
