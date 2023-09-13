using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class TabPanelItem {
      public string icon { get; set; }
      public string title { get; set; }
      public IEnumerable<TaskItem> tasks { get; set; }
    }
}
