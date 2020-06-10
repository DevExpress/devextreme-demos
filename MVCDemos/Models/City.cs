using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class City {
        public string Name { get; set; }
        public int ID { get; set; }
        public ClimateData Data { get; set; }
    }
}
