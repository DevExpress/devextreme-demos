using System;
using System.ComponentModel.DataAnnotations;

namespace DevExtreme.MVC.Demos.Models {
    public class OrderWithCustomerInfo {
        public int ID { get; set; }

        [Display(Name = "Invoice Number")]
        public int OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public int SaleAmount { get; set; }
        public string Terms { get; set; }
        public int TotalAmount { get; set; }
        public CustomerInfo CustomerInfo { get; set; }
        public string Employee { get; set; }
    }
}
