using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<SubvalueIndicator> SubvalueIndicators = new[] {
            new SubvalueIndicator { Name = "Meat", Primary = 8, Secondary = new double[] { 7, 3 } },
            new SubvalueIndicator { Name = "Fish", Primary = 7, Secondary = new double[] { 7, 5, 1 } },
            new SubvalueIndicator { Name = "Grocery", Primary = 5, Secondary = new double[] { 1, 3 } },
            new SubvalueIndicator { Name = "Greengrocery", Primary = 3, Secondary = new double[] { 1 } },
            new SubvalueIndicator { Name = "Stationery", Primary = 2, Secondary = new double[] { } }
        };
    }
}
