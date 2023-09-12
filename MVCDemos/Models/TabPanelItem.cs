using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class TabPanelItem {
      public string Icon { get; set; }
      public string Title { get; set; }
      public IEnumerable<TaskItem> Tasks { get; set; }
    }
}
