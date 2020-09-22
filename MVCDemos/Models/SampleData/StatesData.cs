using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<StateData> StatesData = new[] {
            new StateData {
                Coordinates = new double[] {-75.4999, 43.00035},
                Data = new {Name = "New York", Population = 19746227, Capital = "Albany", Area = 141297}
            },
            new StateData {
                Coordinates = new double[] {-89, 40},
                OffsetX = -100,
                OffsetY = -80,
                Data = new {Name = "Illinois", Population = 12880580, Capital = "Springfield", Area = 149995}
            },
            new StateData {
                Coordinates = new double[] {-81.760254, 27.994402},
                Data = new {Name = "Florida", Population = 19893297, Capital = "Tallahassee", Area = 170312}
            },
            new StateData {
                Coordinates = new double[] {-100, 31},
                Data = new {Name = "Texas", Population = 26956958, Capital = "Austin", Area = 695662}
            },
            new StateData {
                Coordinates = new double[] {-119.417931, 36.778259},
                Data = new {Name = "California", Population = 38802500, Capital = "Sacramento", Area = 423967}
            }
        };
    }
}
