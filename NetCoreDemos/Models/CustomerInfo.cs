using System.ComponentModel.DataAnnotations;

namespace DevExtreme.NETCore.Demos.Models {
    public class CustomerInfo {
        [Display(Name = "State")]
        public string StoreState { get; set; }

        [Display(Name = "City")]
        public string StoreCity { get; set; }

    }
}
