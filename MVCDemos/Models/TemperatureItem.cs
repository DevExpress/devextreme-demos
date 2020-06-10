using System;
using System.ComponentModel.DataAnnotations;

namespace DevExtreme.MVC.Demos.Models {
    public class TemperatureItem {
        [Key]
        public DateTime Date { get; set; }
        public float MinTemp { get; set; }
        public float MaxTemp { get; set; }
    }
}
