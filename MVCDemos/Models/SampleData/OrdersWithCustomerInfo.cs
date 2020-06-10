using System;
using System.Collections.Generic;
using DevExtreme.MVC.Demos.Models;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<OrderWithCustomerInfo> OrdersWithCustomerInfo = new[] {
            new OrderWithCustomerInfo {
                ID = 1,
                OrderNumber = 35703,
                OrderDate = DateTime.Parse("2014/04/10"),
                SaleAmount = 11800,
                Terms = "15 Days",
                TotalAmount = 12175,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Los Angeles"
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 4,
                OrderNumber = 35711,
                OrderDate = DateTime.Parse("2014/01/12"),
                SaleAmount = 16050,
                Terms = "15 Days",
                TotalAmount = 16550,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "San Jose"
                },
                Employee = "Jim Packard"
            },
            new OrderWithCustomerInfo {
                ID = 5,
                OrderNumber = 35714,
                OrderDate = DateTime.Parse("2014/01/22"),
                SaleAmount = 14750,
                Terms = "15 Days",
                TotalAmount = 15250,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 7,
                OrderNumber = 35983,
                OrderDate = DateTime.Parse("2014/02/07"),
                SaleAmount = 3725,
                Terms = "15 Days",
                TotalAmount = 3850,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Colorado",
                    StoreCity = "Denver",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 9,
                OrderNumber = 36987,
                OrderDate = DateTime.Parse("2014/03/11"),
                SaleAmount = 14200,
                Terms = "15 Days",
                TotalAmount = 14800,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City"
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 11,
                OrderNumber = 38466,
                OrderDate = DateTime.Parse("2014/03/01"),
                SaleAmount = 7800,
                Terms = "15 Days",
                TotalAmount = 8200,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Los Angeles"
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 14,
                OrderNumber = 39420,
                OrderDate = DateTime.Parse("2014/02/15"),
                SaleAmount = 20500,
                Terms = "15 Days",
                TotalAmount = 9100,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "San Jose",
                },
                Employee = "Jim Packard"
            },
            new OrderWithCustomerInfo {
                ID = 15,
                OrderNumber = 39874,
                OrderDate = DateTime.Parse("2014/02/04"),
                SaleAmount = 9050,
                Terms = "30 Days",
                TotalAmount = 19100,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 18,
                OrderNumber = 42847,
                OrderDate = DateTime.Parse("2014/02/15"),
                SaleAmount = 20400,
                Terms = "30 Days",
                TotalAmount = 20800,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Wyoming",
                    StoreCity = "Casper",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 19,
                OrderNumber = 43982,
                OrderDate = DateTime.Parse("2014/05/29"),
                SaleAmount = 6050,
                Terms = "30 Days",
                TotalAmount = 6250,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 29,
                OrderNumber = 56272,
                OrderDate = DateTime.Parse("2014/02/06"),
                SaleAmount = 15850,
                Terms = "30 Days",
                TotalAmount = 16350,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 30,
                OrderNumber = 57429,
                OrderDate = DateTime.Parse("2013/12/31"),
                SaleAmount = 11050,
                Terms = "30 Days",
                TotalAmount = 11400,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Arizona",
                    StoreCity = "Phoenix",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 32,
                OrderNumber = 58292,
                OrderDate = DateTime.Parse("2014/05/13"),
                SaleAmount = 13500,
                Terms = "15 Days",
                TotalAmount = 13800,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Los Angeles",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 36,
                OrderNumber = 62427,
                OrderDate = DateTime.Parse("2014/01/27"),
                SaleAmount = 23500,
                Terms = "15 Days",
                TotalAmount = 24000,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 39,
                OrderNumber = 65977,
                OrderDate = DateTime.Parse("2014/02/05"),
                SaleAmount = 2550,
                Terms = "15 Days",
                TotalAmount = 2625,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Wyoming",
                    StoreCity = "Casper",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 40,
                OrderNumber = 66947,
                OrderDate = DateTime.Parse("2014/03/23"),
                SaleAmount = 3500,
                Terms = "15 Days",
                TotalAmount = 3600,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 42,
                OrderNumber = 68428,
                OrderDate = DateTime.Parse("2014/04/10"),
                SaleAmount = 10500,
                Terms = "15 Days",
                TotalAmount = 10900,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Los Angeles",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 43,
                OrderNumber = 69477,
                OrderDate = DateTime.Parse("2014/03/09"),
                SaleAmount = 14200,
                Terms = "15 Days",
                TotalAmount = 14500,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Anaheim",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 46,
                OrderNumber = 72947,
                OrderDate = DateTime.Parse("2014/01/14"),
                SaleAmount = 13350,
                Terms = "30 Days",
                TotalAmount = 13650,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 47,
                OrderNumber = 73088,
                OrderDate = DateTime.Parse("2014/03/25"),
                SaleAmount = 8600,
                Terms = "30 Days",
                TotalAmount = 8850,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Reno",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 50,
                OrderNumber = 76927,
                OrderDate = DateTime.Parse("2014/04/27"),
                SaleAmount = 9800,
                Terms = "30 Days",
                TotalAmount = 10050,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 51,
                OrderNumber = 77297,
                OrderDate = DateTime.Parse("2014/04/30"),
                SaleAmount = 10850,
                Terms = "30 Days",
                TotalAmount = 11100,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Arizona",
                    StoreCity = "Phoenix",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 56,
                OrderNumber = 84744,
                OrderDate = DateTime.Parse("2014/02/10"),
                SaleAmount = 4650,
                Terms = "30 Days",
                TotalAmount = 4750,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 57,
                OrderNumber = 85028,
                OrderDate = DateTime.Parse("2014/05/17"),
                SaleAmount = 2575,
                Terms = "30 Days",
                TotalAmount = 2625,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Reno",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 59,
                OrderNumber = 87297,
                OrderDate = DateTime.Parse("2014/04/21"),
                SaleAmount = 14200,
                Terms = "30 Days",
                CustomerInfo = new CustomerInfo {
                    StoreState = "Wyoming",
                    StoreCity = "Casper",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 60,
                OrderNumber = 88027,
                OrderDate = DateTime.Parse("2014/02/14"),
                SaleAmount = 13650,
                Terms = "30 Days",
                TotalAmount = 14050,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 65,
                OrderNumber = 94726,
                OrderDate = DateTime.Parse("2014/05/22"),
                SaleAmount = 20500,
                Terms = "15 Days",
                TotalAmount = 20800,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "San Jose",
                },
                Employee = "Jim Packard"
            },
            new OrderWithCustomerInfo {
                ID = 66,
                OrderNumber = 95266,
                OrderDate = DateTime.Parse("2014/03/10"),
                SaleAmount = 9050,
                Terms = "15 Days",
                TotalAmount = 9250,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 69,
                OrderNumber = 98477,
                OrderDate = DateTime.Parse("2014/01/01"),
                SaleAmount = 23500,
                Terms = "15 Days",
                TotalAmount = 23800,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Wyoming",
                    StoreCity = "Casper",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 70,
                OrderNumber = 99247,
                OrderDate = DateTime.Parse("2014/02/08"),
                SaleAmount = 2100,
                Terms = "15 Days",
                TotalAmount = 2150,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Utah",
                    StoreCity = "Salt Lake City",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 78,
                OrderNumber = 174884,
                OrderDate = DateTime.Parse("2014/04/10"),
                SaleAmount = 7200,
                Terms = "30 Days",
                TotalAmount = 7350,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Colorado",
                    StoreCity = "Denver",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 81,
                OrderNumber = 188877,
                OrderDate = DateTime.Parse("2014/02/11"),
                SaleAmount = 8750,
                Terms = "30 Days",
                TotalAmount = 8900,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Arizona",
                    StoreCity = "Phoenix",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 82,
                OrderNumber = 191883,
                OrderDate = DateTime.Parse("2014/02/05"),
                SaleAmount = 9900,
                Terms = "30 Days",
                TotalAmount = 10150,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Los Angeles",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 83,
                OrderNumber = 192474,
                OrderDate = DateTime.Parse("2014/01/21"),
                SaleAmount = 12800,
                Terms = "30 Days",
                TotalAmount = 13100,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "Anaheim",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 84,
                OrderNumber = 193847,
                OrderDate = DateTime.Parse("2014/03/21"),
                SaleAmount = 14100,
                Terms = "30 Days",
                TotalAmount = 14350,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "San Diego",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 85,
                OrderNumber = 194877,
                OrderDate = DateTime.Parse("2014/03/06"),
                SaleAmount = 4750,
                Terms = "30 Days",
                TotalAmount = 4950,
                CustomerInfo = new CustomerInfo {
                    StoreState = "California",
                    StoreCity = "San Jose",
                },
                Employee = "Jim Packard"
            },
            new OrderWithCustomerInfo {
                ID = 86,
                OrderNumber = 195746,
                OrderDate = DateTime.Parse("2014/05/26"),
                SaleAmount = 9050,
                Terms = "30 Days",
                TotalAmount = 9250,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Las Vegas",
                },
                Employee = "Harv Mudd"
            },
            new OrderWithCustomerInfo {
                ID = 87,
                OrderNumber = 197474,
                OrderDate = DateTime.Parse("2014/03/02"),
                SaleAmount = 6400,
                Terms = "30 Days",
                TotalAmount = 6600,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Nevada",
                    StoreCity = "Reno",
                },
                Employee = "Clark Morgan"
            },
            new OrderWithCustomerInfo {
                ID = 88,
                OrderNumber = 198746,
                OrderDate = DateTime.Parse("2014/05/09"),
                SaleAmount = 15700,
                Terms = "30 Days",
                TotalAmount = 16050,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Colorado",
                    StoreCity = "Denver",
                },
                Employee = "Todd Hoffman"
            },
            new OrderWithCustomerInfo {
                ID = 91,
                OrderNumber = 214222,
                OrderDate = DateTime.Parse("2014/02/08"),
                SaleAmount = 11050,
                Terms = "30 Days",
                TotalAmount = 11250,
                CustomerInfo = new CustomerInfo {
                    StoreState = "Arizona",
                    StoreCity = "Phoenix",
                },
                Employee = "Clark Morgan"
            }
        };
    }
}
