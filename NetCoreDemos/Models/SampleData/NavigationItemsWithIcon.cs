using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<NavigationItemWithIcon> NavigationItemsWithIcon = new[] {
            new NavigationItemWithIcon {
                id = 1,
                text = "Products",
                icon = "product"
            },
            new NavigationItemWithIcon {
                id = 2,
                text = "Sales",
                icon = "money"
            },
            new NavigationItemWithIcon {
                id = 3,
                text = "Customers",
                icon = "group"
            },
            new NavigationItemWithIcon {
                id = 4,
                text = "Employees",
                icon = "card"
            },
            new NavigationItemWithIcon {
                id = 5,
                text = "Reports",
                icon = "chart"
            }
        };
    }
}
