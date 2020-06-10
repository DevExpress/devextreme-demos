using System.ComponentModel.DataAnnotations;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class User {
        [Key]
        public int UserId { get; set; }
        public string FullName { get; set; }
    }
}
