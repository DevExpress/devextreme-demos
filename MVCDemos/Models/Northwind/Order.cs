using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace DevExtreme.MVC.Demos.Models.Northwind {

    public partial class Order {
        public Order() {
            Order_Details = new HashSet<Order_Detail>();
        }

        public int OrderID { get; set; }

        [StringLength(5)]
        [Display(Name = "Customer")]
        public string CustomerID { get; set; }

        public int? EmployeeID { get; set; }

        [Required]
        public DateTime? OrderDate { get; set; }

        public DateTime? RequiredDate { get; set; }

        public DateTime? ShippedDate { get; set; }

        [Display(Name = "Shipping Company")]
        public int? ShipVia { get; set; }

        [Range(0, 2000)]
        [Column(TypeName = "money")]
        public decimal? Freight { get; set; }

        [StringLength(40)]
        public string ShipName { get; set; }

        [StringLength(60)]
        public string ShipAddress { get; set; }

        [StringLength(15)]
        public string ShipCity { get; set; }

        [StringLength(15)]
        public string ShipRegion { get; set; }

        [StringLength(10)]
        public string ShipPostalCode { get; set; }

        [StringLength(15)]
        public string ShipCountry { get; set; }

        public virtual Customer Customer { get; set; }

        public virtual Employee Employee { get; set; }

        [JsonIgnore]
        public virtual ICollection<Order_Detail> Order_Details { get; set; }

        public virtual Shipper Shipper { get; set; }
    }
}
