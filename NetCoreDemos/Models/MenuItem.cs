using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class MenuItem {
        public string text { get; set; }
        public bool disabled { get; set; }
        public string icon { get; set; }
        public int price { get; set; }
        public IEnumerable<MenuItem> items { get; set; }
    }
}
