using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DevExtreme.NETCore.Demos.Models.Northwind {

    public partial class Product {
        public Product() {
            Order_Details = new HashSet<Order_Detail>();
        }

        [Column("ProductID")]
        [Key]
        public int ProductID { get; set; }

        [Required]
        [MaxLength(40)]
        public string ProductName { get; set; }

        [Column("SupplierID")]
        public int? SupplierID { get; set; }

        [Column("CategoryID")]
        public int? CategoryID { get; set; }

        [MaxLength(20)]
        public string QuantityPerUnit { get; set; }

        [Column(TypeName = "money")]
        public decimal? UnitPrice { get; set; }

        public short? UnitsInStock { get; set; }

        public short? UnitsOnOrder { get; set; }

        public short? ReorderLevel { get; set; }

        public bool Discontinued { get; set; }

        [ForeignKey("CategoryID")]
        [InverseProperty("Products")]
        public virtual Category Category { get; set; }

        [JsonIgnore]
        [InverseProperty("Product")]
        public virtual ICollection<Order_Detail> Order_Details { get; set; }

        [ForeignKey("SupplierID")]
        [InverseProperty("Products")]
        public virtual Supplier Supplier { get; set; }
    }
}
