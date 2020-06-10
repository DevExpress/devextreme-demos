using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class FormViewModel {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CompanyName { get; set; }
        public string Position { get; set; }
        public string OfficeNo { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }
        public string Notes { get; set; }
    }
    public class DynamicFormViewModel {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public List<string> Phones { get; set; }
    }
}
