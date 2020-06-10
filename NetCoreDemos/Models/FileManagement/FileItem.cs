using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class FileItem {
        [Key]
        public int Id { get; set; }
        public int ParentId { get; set; }
        [ForeignKey("ParentId")]
        public FileItem Parent { get; set; }

        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public bool IsDirectory { get; set; }

        public int ModifiedById { get; set; }
        [ForeignKey("ModifiedById")]
        public User ModifiedBy { get; set; }
    }
}
