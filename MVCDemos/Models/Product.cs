using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class Product {
        public string ID { get; set; }
        public string CategoryId { get; set; }
        public string Text { get; set; }
        public bool Expanded { get; set; }
        public IEnumerable<Product> Items { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
    }
}
