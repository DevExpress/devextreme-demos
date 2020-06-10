using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    public class Demo {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public string Name { get; set; }
        public int Status { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool Hidden { get; set; }
    }
}
