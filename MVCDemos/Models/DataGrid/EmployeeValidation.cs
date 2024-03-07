using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class EmployeeValidation {
        public int ID { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [RegularExpression(@"^\(\d{3}\)\ \d{3}-\d{4}$", ErrorMessage = @"Your phone must have ""(555) 555-5555"" format!")]
        public string Phone { get; set; }

        [Required]
        public string Position { get; set; }

        [Required]
        [RegularExpression(@"^[\d\w._-]+@[\d\w._-]+\.[\w]+$", ErrorMessage = @"Email is invalid")]
        [Remote("CheckUniqueEmailAddress", "RemoteValidation", ErrorMessage = "Email is already registered", HttpMethod = "POST", AdditionalFields = nameof(ID))]
        public string Email { get; set; }
    }
}
