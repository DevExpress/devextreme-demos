using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models.SampleData {

    public partial class SampleData {
        public static IEnumerable<object> GetCustomLegendMarkersSampleData() {
            var random = new Random();
            return Enumerable.Range(25, 120).Select(x => {
                var argument = (Double)x / 10;
                var originalValue = Math.Sin(argument) / argument;
                return new { Argument = argument, OriginalValue = originalValue, Value = originalValue + (0.5 - random.NextDouble()) / 10 };
            });
        }
    }
}
