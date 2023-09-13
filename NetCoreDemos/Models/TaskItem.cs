using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class TaskItem {
      public string status { get; set; }
      public string priority { get; set; }
      public string text { get; set; }
      public string date { get; set; }
      public string assignedBy { get; set; }
    }
}
