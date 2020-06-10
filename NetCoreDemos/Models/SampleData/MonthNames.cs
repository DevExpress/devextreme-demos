using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class MonthName {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public partial class SampleData {
        public static readonly IEnumerable<MonthName> MonthNames = new[]{
            new MonthName {
                Id = 1,
                Name = "January"
            },
            new MonthName {
                Id = 2,
                Name = "February"
            },
            new MonthName {
                Id = 3,
                Name = "March"
            },
            new MonthName {
                Id = 4,
                Name = "April"
            },
            new MonthName {
                Id = 5,
                Name = "May"
            },
            new MonthName {
                Id = 6,
                Name = "June"
            },
            new MonthName {
                Id = 7,
                Name = "July"
            },
            new MonthName {
                Id = 8,
                Name = "August"
            },
            new MonthName {
                Id = 9,
                Name = "September"
            },
            new MonthName {
                Id = 10,
                Name = "October"
            },
            new MonthName {
                Id = 11,
                Name = "November"
            },
            new MonthName {
                Id = 12,
                Name = "December"
            }
        };
    }
}
