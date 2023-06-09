using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<MedalistData> IceHockeyGoldMedalistsData = new[] {
            new MedalistData {
                Country = "Russia",
                OldCountryName = "Soviet Union",
                Gold = 27,
                Silver = 10,
                Bronze = 10
            },
            new MedalistData {
                Country = "Canada",
                Gold = 26,
                Silver = 15,
                Bronze = 9
            },
            new MedalistData {
                Country = "Czech Republic",
                OldCountryName = "Czechoslovakia",
                Gold = 12,
                Silver = 13,
                Bronze = 21
            },
            new MedalistData {
                Country = "Sweden",
                Gold = 11,
                Silver = 19,
                Bronze = 17
            },
            new MedalistData {
                Country = "Finland",
                Gold = 3,
                Silver = 8,
                Bronze = 3
            },
            new MedalistData {
                Country = "United States",
                Gold = 2,
                Silver = 9,
                Bronze = 8
            },
            new MedalistData {
                Country = "Great Britain",
                Gold = 1,
                Silver = 2,
                Bronze = 2
            },
            new MedalistData {
                Country = "Slovakia",
                Gold = 1,
                Silver = 2,
                Bronze = 1
            }
        };
    }
}
