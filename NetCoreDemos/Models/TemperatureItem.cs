using System;
using System.ComponentModel.DataAnnotations;

namespace DevExtreme.NETCore.Demos.Models {
    public class TemperatureItem {
        [Key]
        public DateTime Date { get; set; }
        public double MinTemp { get; set; }
        public double MaxTemp { get; set; }
    }
}
