using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DevExtreme.NETCore.Demos.Models.Northwind {

    public partial class Order {
        public Order() {
            Order_Details = new HashSet<Order_Detail>();
        }

        [Column("OrderID")]
        [Key]
        public int OrderID { get; set; }

        [MaxLength(5)]
        [Column("CustomerID", TypeName = "nchar(5)")]
        [Display(Name = "Customer")]
        public string CustomerID { get; set; }

        [Column("EmployeeID")]
        public int? EmployeeID { get; set; }

        [Required]
        [Column(TypeName = "datetime")]
        public DateTime? OrderDate { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? RequiredDate { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? ShippedDate { get; set; }

        [Display(Name = "Shipping Company")]
        public int? ShipVia { get; set; }

        [Range(0, 2000)]
        [Column(TypeName = "money")]
        public decimal? Freight { get; set; }

        [MaxLength(40)]
        public string ShipName { get; set; }

        [MaxLength(60)]
        public string ShipAddress { get; set; }

        [MaxLength(15)]
        public string ShipCity { get; set; }

        [MaxLength(15)]
        public string ShipRegion { get; set; }

        [MaxLength(10)]
        public string ShipPostalCode { get; set; }

        [MaxLength(15)]
        public string ShipCountry { get; set; }

        [ForeignKey("CustomerID")]
        [InverseProperty("Orders")]
        public virtual Customer Customer { get; set; }

        [ForeignKey("EmployeeID")]
        [InverseProperty("Orders")]
        public virtual Employee Employee { get; set; }

        [JsonIgnore]
        [InverseProperty("Order")]
        public virtual ICollection<Order_Detail> Order_Details { get; set; }

        [ForeignKey("ShipVia")]
        [InverseProperty("Orders")]
        public virtual Shipper Shipper { get; set; }
    }
}
