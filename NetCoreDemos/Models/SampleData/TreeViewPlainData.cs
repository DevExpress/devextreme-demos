using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TreeViewPlainData {
        public static readonly IEnumerable<Product> Products = new[] {
            new Product {
                ID = "1",
                Text = "Stores",
                Expanded = true
            },
            new Product {
                ID = "1_1",
                CategoryId = "1",
                Text = "Super Mart of the West",
                Expanded = true
            },
            new Product {
                ID = "1_1_1",
                CategoryId = "1_1",
                Text = "Video Players"
            },
            new Product {
                ID = "1_1_1_1",
                CategoryId = "1_1_1",
                Text = "HD Video Player",
                Image = "../../images/ProductsLarge/1.png",
                Price = 220
            },
            new Product {
                ID = "1_1_1_2",
                CategoryId = "1_1_1",
                Text = "SuperHD Video Player",
                Image = "../../images/ProductsLarge/2.png",
                Price = 270
            },
            new Product {
                ID = "1_1_2",
                CategoryId = "1_1",
                Text = "Televisions",
                Expanded = true
            },
            new Product {
                ID = "1_1_2_1",
                CategoryId = "1_1_2",
                Text = "SuperLCD 42",
                Image = "../../images/ProductsLarge/7.png",
                Price = 1200
            },
            new Product {
                ID = "1_1_2_2",
                CategoryId = "1_1_2",
                Text = "SuperLED 42",
                Image = "../../images/ProductsLarge/5.png",
                Price = 1450
            },
            new Product {
                ID = "1_1_2_3",
                CategoryId = "1_1_2",
                Text = "SuperLED 50",
                Image = "../../images/ProductsLarge/4.png",
                Price = 1600
            },
            new Product {
                ID = "1_1_2_4",
                CategoryId = "1_1_2",
                Text = "SuperLCD 55",
                Image = "../../images/ProductsLarge/6.png",
                Price = 1750
            },
            new Product {
                ID = "1_1_2_5",
                CategoryId = "1_1_2",
                Text = "SuperLCD 70",
                Image = "../../images/ProductsLarge/9.png",
                Price = 4000
            },
            new Product {
                ID = "1_1_3",
                CategoryId = "1_1",
                Text = "Monitors"
            },
            new Product {
                ID = "1_1_3_1",
                CategoryId = "1_1_3",
                Text = "19\""
            },
            new Product {
                ID = "1_1_3_1_1",
                CategoryId = "1_1_3_1",
                Text = "DesktopLCD 19",
                Image = "../../images/ProductsLarge/10.png",
                Price = 160
            },
            new Product {
                ID = "1_1_4",
                CategoryId = "1_1",
                Text = "Projectors"
            },
            new Product {
                ID = "1_1_4_1",
                CategoryId = "1_1_4",
                Text = "Projector Plus",
                Image = "../../images/ProductsLarge/14.png",
                Price = 550
            },
            new Product {
                ID = "1_1_4_2",
                CategoryId = "1_1_4",
                Text = "Projector PlusHD",
                Image = "../../images/ProductsLarge/15.png",
                Price = 750
            }
        };
    }
}
