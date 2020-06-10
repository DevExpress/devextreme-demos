using System.ComponentModel.DataAnnotations;

namespace DevExtreme.NETCore.Demos.Models {
    public class RowReorderingTask {
        public int ID { set; get; }
        [Required]
        public string Subject { set; get; }
        [Required]
        public int Status { set; get; }
        [Required]
        public int Owner { set; get; }
        [Required]
        public int AssignedEmployee { get; set; }
        public int OrderIndex { get; set; }
        public int Priority { get; set; }
    }
}
