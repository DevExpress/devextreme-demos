using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class StockPrice {
        public DateTime Date { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public int Volume { get; set; }
        public string Name { get; set; }
    }
}
