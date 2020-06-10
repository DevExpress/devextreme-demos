using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Product> Products = new[] {
            new Product {
                Text = "HD Video Player",
                CategoryId = "2"
            },
            new Product {
                Text = "SuperHD Video Player",
                CategoryId = "2"
            },
            new Product {
                Text = "SuperLCD 42",
                CategoryId = "3"
            },
            new Product {
                Text = "SuperLED 42",
                CategoryId = "3"
            },
            new Product {
                Text = "SuperLED 50",
                CategoryId = "3"
            },
            new Product {
                Text = "SuperLCD 55",
                CategoryId = "3"
            },
            new Product {
                Text = "DesktopLCD 19",
                CategoryId = "4"
            },
            new Product {
                Text = "DesktopLCD 21",
                CategoryId = "4"
            },
            new Product {
                Text = "DesktopLED 21",
                CategoryId = "4"
            },
            new Product {
                Text = "Projector Plus",
                CategoryId = "5"
            },
            new Product {
                Text = "Projector PlusHD",
                CategoryId = "5"
            }
        };
    }
}
