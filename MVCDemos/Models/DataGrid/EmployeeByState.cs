using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class EmployeeByState {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Position { get; set; }
        public string Prefix { get; set; }

        [Display(Name = "State")]
        public int? StateID { get; set; }

        [Display(Name = "City")]
        public int? CityID { get; set; }
    }
}
