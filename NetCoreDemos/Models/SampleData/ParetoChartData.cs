using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<ParetoChartData> ParetoChartData = new[] {
            new ParetoChartData { complaint = "Cold pizza", count = 780 },
            new ParetoChartData { complaint = "Not enough cheese", count = 120 },
            new ParetoChartData { complaint = "Underbaked or Overbaked", count = 52 },
            new ParetoChartData { complaint = "Delayed delivery", count = 1123 },
            new ParetoChartData { complaint = "Damaged pizza", count = 321 },
            new ParetoChartData { complaint = "Incorrect billing", count = 89 },
            new ParetoChartData { complaint = "Wrong size delivered", count = 222 }
        };
    }
}
