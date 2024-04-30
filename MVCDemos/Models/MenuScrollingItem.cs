using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class MenuScrollingItem {
        public string text { get; set; }
        public IEnumerable<MenuItem> items { get; set; }
    }
}
