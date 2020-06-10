using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static IEnumerable<object> GetStochasticProcessResearchData() {
            var random = new Random();
            return Enumerable.Range(1, 480).Select(x => {
                var argument = 0.75 * x;
                var originalValue = x == 0 ? 0 : Math.Log(argument);
                return new { Argument = argument, OriginalValue = originalValue, Value = originalValue - (Math.Sin(random.NextDouble() * argument) * x / 480) + (1 - random.NextDouble() * 2) };
            });
        }
    }
}
