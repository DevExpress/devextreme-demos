using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<SelectedEmployee> SelectedEmployees = new[] {
            new SelectedEmployee { LastName = "Davolio", FirstName = "Nancy", BirthYear = 1948, City = "Seattle", Title = "Sales Representative" },
            new SelectedEmployee { LastName = "Fuller", FirstName = "Andrew", BirthYear = 1952, City = "Tacoma", Title = "Vice President, Sales" },
            new SelectedEmployee { LastName = "Leverling", FirstName = "Janet", BirthYear = 1963, City = "Kirkland", Title = "Sales Representative" },
            new SelectedEmployee { LastName = "Peacock", FirstName = "Margaret", BirthYear = 1937, City = "Redmond", Title = "Sales Representative" },
            new SelectedEmployee { LastName = "Buchanan", FirstName = "Steven", BirthYear = 1955, City = "London", Title = "Sales Manager" },
            new SelectedEmployee { LastName = "Suyama", FirstName = "Michael", BirthYear = 1963, City = "London", Title = "Sales Representative" },
            new SelectedEmployee { LastName = "King", FirstName = "Robert", BirthYear = 1960, City = "London", Title = "Sales Representative" },
            new SelectedEmployee { LastName = "Callahan", FirstName = "Laura", BirthYear = 1958, City = "Seattle", Title = "Inside Sales Coordinator" },
            new SelectedEmployee { LastName = "Dodsworth", FirstName = "Anne", BirthYear = 1966, City = "London", Title = "Sales Representative" }
        };
    }
}
