using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static IEnumerable<object> GetScatterData() {
            var rnd = new Random();

            double b1 = rnd.Next(-100, 100) / 10;
            double b2 = rnd.Next(-100, 100) / 10;
            double k1 = rnd.Next(-100, 100) / 10;
            double k2 = rnd.Next(-100, 100) / 10;

            if(k1 < 0.1 && k1 >= 0) k1 = 0.1;
            if(k1 > -0.1 && k1 < 0) k1 = -0.1;
            if(k2 < 0.1 && k2 >= 0) k2 = 0.1;
            if(k2 > -0.1 && k2 < 0) k2 = -0.1;

            double deviation1 = Math.Round(k1 * 8);
            double deviation2 = Math.Round(k2 * 8);

            for(int i = 0; i < 30; i++) {
                var isNegativeDelta = rnd.Next(0, 1) == 0;
                double delta1 = deviation1 * rnd.NextDouble();
                double delta2 = deviation2 * rnd.NextDouble();

                if(isNegativeDelta) {
                    delta1 = -delta1;
                    delta2 = -delta2;
                }

                double x1 = rnd.Next(1, 20);
                double x2 = rnd.Next(1, 20);
                double y1 = k1 * x1 + b1 + delta1;
                double y2 = k2 * x2 + b2 + delta2;

                yield return new { X1 = x1, Y1 = y1, X2 = x2, Y2 = y2 };
            }
        }
    }
}
