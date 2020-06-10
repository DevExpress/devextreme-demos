using System.ComponentModel.DataAnnotations;

namespace DevExtreme.MVC.Demos.Models.FileManagement {
    public class User {
        [Key]
        public int UserId { get; set; }
        public string FullName { get; set; }
    }
}
