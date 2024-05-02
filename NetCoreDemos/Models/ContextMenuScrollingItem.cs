using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class ContextMenuScrollingItem {
        public string text { get; set; }
        public IEnumerable<ContextMenuScrollingItem> items { get; set; }
    }
}
