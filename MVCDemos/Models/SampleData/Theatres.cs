using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Theatre> Theatres = new[] {
            new Theatre { ID = 0, Text = "Cinema Hall 1" },
            new Theatre { ID = 1, Text = "Cinema Hall 2" }
        };
    }
}
