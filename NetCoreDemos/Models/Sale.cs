using System;
using System.ComponentModel.DataAnnotations;

namespace DevExtreme.NETCore.Demos.Models {
    public class Sale {
        [Display(Name = "Order ID")]
        public int OrderId { get; set; }
        public string Region { get; set; }
        public string Country { get; set; }
        public string City { get; set; }

        [Display(Name = "Total")]
        public int Amount { get; set; }
        public DateTime Date { get; set; }
    }
}
