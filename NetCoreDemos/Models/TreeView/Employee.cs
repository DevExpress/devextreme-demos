using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.TreeView {
    public class Employee {
        public int ID { get; set; }
        public string Prefix { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
        public bool Expanded { get; set; }
        public bool Selected { get; set; }
        public IEnumerable<Employee> Items { get; set; }
    }
}
