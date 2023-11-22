using System;
using System.Collections.Generic;
using static System.Net.Mime.MediaTypeNames;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<WorkShift> WorkShifts = new[] {
            new WorkShift {
              Text = "First shift",
              Offset = -120,
            }, new WorkShift {
              Text = "Second shift",
              Offset = 360,
            }, new WorkShift {
              Text = "Third shift",
              Offset = 840,
            }
        };
    }
}
