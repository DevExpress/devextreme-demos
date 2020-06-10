using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class Intraday {
        public DateTime Date { get; set; }
        public object Open { get; set; }
        public object High { get; set; }
        public object Low { get; set; }
        public object Close { get; set; }
        public uint Volume { get; set; }
        public double AdjClose { get; set; }
        public IEnumerable<object> DayClose { get; set; }
    }
}
