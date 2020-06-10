using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<DiscreteScaleTemperature> DiscreteScaleTemperatures = new[] {
            new DiscreteScaleTemperature { Date = "December", DayT = 7, NightT = 3 },
            new DiscreteScaleTemperature { Date = "January", DayT = 6, NightT = 2 },
            new DiscreteScaleTemperature { Date = "February", DayT = 7, NightT = 3 },
            new DiscreteScaleTemperature { Date = "March", DayT = 10, NightT = 3 },
            new DiscreteScaleTemperature { Date = "April", DayT = 14, NightT = 5 },
            new DiscreteScaleTemperature { Date = "May", DayT = 18, NightT = 8 },
            new DiscreteScaleTemperature { Date = "June", DayT = 21, NightT = 11 },
            new DiscreteScaleTemperature { Date = "July", DayT = 22, NightT = 13 },
            new DiscreteScaleTemperature { Date = "August", DayT = 21, NightT = 13 },
            new DiscreteScaleTemperature { Date = "September", DayT = 19, NightT = 11 },
            new DiscreteScaleTemperature { Date = "October", DayT = 15, NightT = 8 },
            new DiscreteScaleTemperature { Date = "November", DayT = 10, NightT = 4 }
        };
    }
}
