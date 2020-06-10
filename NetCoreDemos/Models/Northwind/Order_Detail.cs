using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DevExtreme.NETCore.Demos.Models.Northwind {

    [Table("Order Details")]
    public partial class Order_Detail {
        [Column("OrderID")]
        public int OrderID { get; set; }

        [Column("ProductID")]
        public int ProductID { get; set; }

        [Column(TypeName = "money")]
        public decimal UnitPrice { get; set; }

        public short Quantity { get; set; }

        public float Discount { get; set; }

        [ForeignKey("OrderID")]
        [InverseProperty("Order_Details")]
        public virtual Order Order { get; set; }

        [ForeignKey("ProductID")]
        [InverseProperty("Order_Details")]
        public virtual Product Product { get; set; }
    }
}
