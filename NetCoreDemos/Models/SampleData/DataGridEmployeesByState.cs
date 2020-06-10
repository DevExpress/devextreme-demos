using System;
using System.Collections.Generic;
using System.Linq;
using DevExtreme.NETCore.Demos.Models.DataGrid;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeByState> DataGridEmployeesByState = new[] {
            new EmployeeByState {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Prefix = "Mr.",
                Position = "CTO",
                StateID = 5,
                CityID = 17
            },
            new EmployeeByState {
                ID = 2,
                FirstName = "Olivia",
                LastName = "Peyton",
                Prefix = "Mrs.",
                Position = "HR Manager",
                StateID = 5,
                CityID = 17
            },
            new EmployeeByState {
                ID = 3,
                FirstName = "Robert",
                LastName = "Reagan",
                Prefix = "Mr.",
                Position = "IT Manager",
                StateID = 4,
                CityID = 14
            },
            new EmployeeByState {
                ID = 4,
                FirstName = "Greta",
                LastName = "Sims",
                Prefix = "Ms.",
                Position = "Shipping Manager",
                StateID = 3,
                CityID = 8
            },
            new EmployeeByState {
                ID = 5,
                FirstName = "Brett",
                LastName = "Wade",
                Prefix = "Mr.",
                Position = "Shipping Manager",
                StateID = 3,
                CityID = 9
            },
            new EmployeeByState {
                ID = 6,
                FirstName = "Sandra",
                LastName = "Johnson",
                Prefix = "Mrs.",
                Position = "Network Admin",
                StateID = 2,
                CityID = 6
            },
            new EmployeeByState {
                ID = 7,
                FirstName = "Kevin",
                LastName = "Carter",
                Prefix = "Mr.",
                Position = "Network Admin",
                StateID = 1,
                CityID = 3
            },
            new EmployeeByState {
                ID = 8,
                FirstName = "Cynthia",
                LastName = "Stanwick",
                Prefix = "Ms.",
                Position = "Sales Assistant",
                StateID = 1,
                CityID = 3
            },
            new EmployeeByState {
                ID = 9,
                FirstName = "Kent",
                LastName = "Samuelson",
                Prefix = "Dr.",
                Position = "Sales Assistant",
                StateID = 1,
                CityID = 2
            },
            new EmployeeByState {
                ID = 10,
                FirstName = "Taylor",
                LastName = "Riley",
                Prefix = "Mr.",
                Position = "Support Assistant",
                StateID = 5,
                CityID = 17
            },
            new EmployeeByState {
                ID = 11,
                FirstName = "Sam",
                LastName = "Hill",
                Prefix = "Mr.",
                Position = "Sales Assistant",
                StateID = 2,
                CityID = 5
            },
            new EmployeeByState {
                ID = 12,
                FirstName = "Kelly",
                LastName = "Rodriguez",
                Prefix = "Ms.",
                Position = "Sales Assistant",
                StateID = 5,
                CityID = 17
            },
            new EmployeeByState {
                ID = 13,
                FirstName = "Natalie",
                LastName = "Maguirre",
                Prefix = "Mrs.",
                Position = "Sales Assistant",
                StateID = 4,
                CityID = 14
            },
            new EmployeeByState {
                ID = 14,
                FirstName = "Walter",
                LastName = "Hobbs",
                Prefix = "Mr.",
                Position = "Support Assistant",
                StateID = 2,
                CityID = 5
            }
        };
    }
}
