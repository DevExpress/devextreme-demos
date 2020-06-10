using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<NumericScaleProduct> NumericScaleProducts = new[] {
            new NumericScaleProduct { Weight = 1, AppleCost = 3, OrangeCost = 7 },
            new NumericScaleProduct { Weight = 2, AppleCost = 20, OrangeCost = 14 },
            new NumericScaleProduct { Weight = 3, AppleCost = 21, OrangeCost = 21 },
            new NumericScaleProduct { Weight = 4, AppleCost = 22, OrangeCost = 28 },
            new NumericScaleProduct { Weight = 5, AppleCost = 25, OrangeCost = 35 },
            new NumericScaleProduct { Weight = 6, AppleCost = 30, OrangeCost = 42 },
            new NumericScaleProduct { Weight = 7, AppleCost = 35, OrangeCost = 44 },
            new NumericScaleProduct { Weight = 8, AppleCost = 42, OrangeCost = 45 },
            new NumericScaleProduct { Weight = 9, AppleCost = 49, OrangeCost = 46 },
            new NumericScaleProduct { Weight = 10, AppleCost = 60, OrangeCost = 47 }
        };
    }
}
