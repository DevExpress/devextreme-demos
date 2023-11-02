using DevExtreme.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class EditorsViewModel {
        public EditorsViewModel() {
            // VacationDates = new DateTime[2];
        }

        [Required(ErrorMessage = "Email is required")]
        [RegularExpression(@"^[\d\w._-]+@[\d\w._-]+\.[\w]+$", ErrorMessage = "Email is invalid")]
        [Remote("CheckEmailAddress", "RemoteValidation", ErrorMessage = "Email is already registered", HttpMethod = "POST")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Name is required")]
        [RegularExpression(@"^[^0-9]+$", ErrorMessage = "Do not use digits in the Name.")]
        [StringLength(int.MaxValue, MinimumLength = 2, ErrorMessage = "Name must have at least 2 symbols")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Confirm Password is required")]
        [System.ComponentModel.DataAnnotations.Compare("Password", ErrorMessage = "'Password' and 'Confirm Password' do not match.")]
        public string ConfirmPassword { get; set; } = string.Empty;

        [RegularExpression(@"^[02-9]\d{9}$", ErrorMessage = "The phone must have a correct USA phone format")]
        public string Phone { get; set; } = string.Empty;

        public string Extension { get; set; }

        [Required(ErrorMessage = "Country is required")]
        public string Country { get; set; }

        [Required(ErrorMessage = "Address is required")]
        public string Address { get; set; } = string.Empty;

        public string Description { get; set; }

        public int Age { get; set; }

        public string Drink { get; set; }

        [Required(ErrorMessage = "City is required")]
        [RegularExpression("^[^0-9]+$", ErrorMessage = "Do not use digits in the City name.")]
        [StringLength(int.MaxValue, MinimumLength = 2, ErrorMessage = "City must have at least 2 symbols")]
        public string City { get; set; }

        public IEnumerable<string> Colors { get; set; }

        public IEnumerable<string> SelectedColors { get; set; }

        public string Color { get; set; }

        [Display(Name = "Date of birth")]
        [Required(ErrorMessage = "Date of birth is required")]
        [VerifyAge(21, ErrorMessage = "You must be at least {1} years old")]
        public DateTime? Date { get; set; }

        [VerifyDateRange(25, ErrorMessage = "The vacation period must not exceed {1} days")]
        public DateTime[] VacationDates { get; set; }

        [DevExtremeRequired(ErrorMessage = "You must agree to the Terms and Conditions")]
        public bool Accepted { get; set; }

    }
}
