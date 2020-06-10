using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models {
    public class ListProduct {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int? CurrentInventory { get; set; }
        public int Backorder { get; set; }
        public int Manufacturing { get; set; }
        public string Category { get; set; }
        public string ImageSrc { get; set; }
    }
}
