using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
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
