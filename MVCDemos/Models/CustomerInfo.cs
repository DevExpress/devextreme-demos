using System.ComponentModel.DataAnnotations;

namespace DevExtreme.MVC.Demos.Models {
    public class CustomerInfo {
        [Display(Name = "State")]
        public string StoreState { get; set; }

        [Display(Name = "City")]
        public string StoreCity { get; set; }
    }
}
