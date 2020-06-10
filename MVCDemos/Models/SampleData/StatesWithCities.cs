using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<State> StatesWithCities = new[] {
            new State {
                ID = 1,
                Name = "Alabama"
            },
            new State {
                ID = 2,
                Name = "Alaska"
            },
            new State {
                ID = 3,
                Name = "Arizona"
            },
            new State {
                ID = 4,
                Name = "Arkansas"
            },
            new State {
                ID = 5,
                Name = "California"
            }
        };
    }
}
