using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<CostAndRevenue> CostsAndRevenues = new[] {
            new CostAndRevenue { Date = new DateTime(2011, 12, 22), Cost = 19, Revenue = 18 },
            new CostAndRevenue { Date = new DateTime(2011, 12, 29), Cost = 27, Revenue = 12 },
            new CostAndRevenue { Date = new DateTime(2012, 1, 5), Cost = 30, Revenue = 5 },
            new CostAndRevenue { Date = new DateTime(2012, 1, 12), Cost = 26, Revenue = 6 },
            new CostAndRevenue { Date = new DateTime(2012, 1, 19), Cost = 18, Revenue = 10 },
            new CostAndRevenue { Date = new DateTime(2012, 1, 26), Cost = 15, Revenue = 15 },
            new CostAndRevenue { Date = new DateTime(2012, 2, 2), Cost = 14, Revenue = 21 },
            new CostAndRevenue { Date = new DateTime(2012, 2, 9), Cost = 14, Revenue = 25 }
        };
    }
}
