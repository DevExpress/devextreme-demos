using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<NavigationItem> NavigationItems = new[] {
            new NavigationItem {
                id = 1,
                text = "Products"
            },
            new NavigationItem {
                id = 2,
                text = "Sales"
            },
            new NavigationItem {
                id = 3,
                text = "Customers"
            },
            new NavigationItem {
                id = 4,
                text = "Employees"
            },
            new NavigationItem {
                id = 5,
                text = "Reports"
            }
        };
    }
}
