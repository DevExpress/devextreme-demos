using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class TaskItem {
      public string Status { get; set; }
      public string Priority { get; set; }
      public string Text { get; set; }
      public string Date { get; set; }
      public string AssignedBy { get; set; }
    }
}
