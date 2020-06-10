using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Payment> Payments = new[] {
            new Payment {
                PaymentId = 1,
                ContactName = "Nancy Davolio",
                CompanyName = "Premier Buy",
                Amount = 1740,
                PaymentDate = DateTime.Parse("2013/01/06")
            },
            new Payment {
                PaymentId = 2,
                ContactName = "Andrew Fuller",
                CompanyName = "ElectrixMax",
                Amount = 850,
                PaymentDate = DateTime.Parse("2013/01/13")
            },
            new Payment {
                PaymentId = 3,
                ContactName = "Janet Leverling",
                CompanyName = "Video Emporium",
                Amount = 2235,
                PaymentDate = DateTime.Parse("2013/01/07")
            },
            new Payment {
                PaymentId = 4,
                ContactName = "Margaret Peacock",
                CompanyName = "Screen Shop",
                Amount = 1965,
                PaymentDate = DateTime.Parse("2013/01/03")
            },
            new Payment {
                PaymentId = 5,
                ContactName = "Steven Buchanan",
                CompanyName = "Braeburn",
                Amount = 880,
                PaymentDate = DateTime.Parse("2013/01/10")
            },
            new Payment {
                PaymentId = 6,
                ContactName = "Michael Suyama",
                CompanyName = "PriceCo",
                Amount = 5260,
                PaymentDate = DateTime.Parse("2013/01/17")
            },
            new Payment {
                PaymentId = 7,
                ContactName = "Robert King",
                CompanyName = "Ultimate Gadget",
                Amount = 2790,
                PaymentDate = DateTime.Parse("2013/01/21")
            },
            new Payment {
                PaymentId = 8,
                ContactName = "Laura Callahan",
                CompanyName = "EZ Stop",
                Amount = 3140,
                PaymentDate = DateTime.Parse("2013/01/01")
            },
            new Payment {
                PaymentId = 9,
                ContactName = "Anne Dodsworth",
                CompanyName = "Clicker",
                Amount = 6175,
                PaymentDate = DateTime.Parse("2013/01/24")
            },
            new Payment {
                PaymentId = 10,
                ContactName = "Clark Morgan",
                CompanyName = "Store of America",
                Amount = 4575,
                PaymentDate = DateTime.Parse("2013/01/11")
            }
        };
    }
}
