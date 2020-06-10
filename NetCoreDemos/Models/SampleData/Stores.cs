using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Store> Stores = new[] {
            new Store {
                ID = 1,
                CompanyName = "SuprMart",
                Address = "702 SW 8th Street",
                City = "Bentonville",
                State = "Arkansas",
                Zipcode = 72716,
                Phone = "(800) 555-2797",
                Fax = "(800) 555-2171",
                Website = "http://www.nowebsitesupermart.com"
            },
            new Store {
                ID = 2,
                CompanyName = "El'Depot",
                Address = "2455 Paces Ferry Road NW",
                City = "Atlanta",
                State = "Georgia",
                Zipcode = 30339,
                Phone = "(800) 595-3232",
                Fax = "(800) 595-3231",
                Website = "http://www.nowebsitedepot.com"
            },
            new Store {
                ID = 3,
                CompanyName = "K&S Music",
                Address = "1000 Nicllet Mall",
                City = "Minneapolis",
                State = "Minnesota",
                Zipcode = 55403,
                Phone = "(612) 304-6073",
                Fax = "(612) 304-6074",
                Website = "http://www.nowebsitemusic.com"
            },
            new Store {
                ID = 4,
                CompanyName = "Tom Club",
                Address = "999 Lake Drive",
                City = "Issaquah",
                State = "Washington",
                Zipcode = 98027,
                Phone = "(800) 955-2292",
                Fax = "(800) 955-2293",
                Website = "http://www.nowebsitetomsclub.com"
            }
        };
    }
}
