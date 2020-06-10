using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {

        public static IEnumerable<object> GetDataForCustomPosition() {
            var rnd = new Random();
            Nullable<int> x1 = null;
            Nullable<int> x2 = null;
            Nullable<int> y1 = null;
            Nullable<int> y2 = null;
            int i;
            List<object> ds = new List<object>();
            for(i = 0; i < 20; i++) {
                x1 = rnd.Next(5, 15);
                y1 = rnd.Next(5, 15);

                ds.Add(new { x1 = x1, y1 = y1, x2 = x2, y2 = y2 });
            }
            for(i = 0; i < 20; i++) {
                x2 = rnd.Next(5, 15);
                y2 = rnd.Next(-15, -5);

                ds.Add(new { x1 = x1, y1 = y1, x2 = x2, y2 = y2 });
            }
            for(i = 0; i < 20; i++) {
                x2 = rnd.Next(-15, -5);
                y2 = rnd.Next(5, 15);

                ds.Add(new { x1 = x1, y1 = y1, x2 = x2, y2 = y2 });
            }
            for(i = 0; i < 20; i++) {
                x1 = rnd.Next(-15, -5);
                y1 = rnd.Next(-15, -5);

                ds.Add(new { x1 = x1, y1 = y1, x2 = x2, y2 = y2 });
            }
            return ds.ToArray();
        }
    }
}
