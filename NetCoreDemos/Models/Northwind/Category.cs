using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DevExtreme.NETCore.Demos.Models.Northwind {

    public partial class Category {
        public Category() {
            Products = new HashSet<Product>();
        }

        [Column("CategoryID")]
        [Key]
        public int CategoryID { get; set; }

        [Required]
        [MaxLength(15)]
        public string CategoryName { get; set; }

        [Column(TypeName = "ntext")]
        public string Description { get; set; }

        [Column(TypeName = "image")]
        public byte[] Picture { get; set; }

        [JsonIgnore]
        [InverseProperty("Category")]
        public virtual ICollection<Product> Products { get; set; }
    }
}
