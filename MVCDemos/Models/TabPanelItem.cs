using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class TabPanelItem {
        public string icon { get; set; }
        public string title { get; set; }
        public IEnumerable<TaskItem> tasks { get; set; }
    }
}
