using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeMention> EmployeeMentions = new[] {
            new EmployeeMention {
                id = 1,
                text = "John Heart",
                team = "Engineering",
                icon = "../../images/mentions/John-Heart.png"
            },
            new EmployeeMention {
                id = 2,
                text = "Kevin Carter",
                team = "Engineering",
                icon = "../../images/mentions/Kevin-Carter.png"
            },
            new EmployeeMention {
                id = 3,
                text = "Olivia Peyton",
                team = "Management",
                icon = "../../images/mentions/Olivia-Peyton.png"
            },
            new EmployeeMention {
                id = 4,
                text = "Robert Reagan",
                team = "Management",
                icon = "../../images/mentions/Robert-Reagan.png"
            },
            new EmployeeMention {
                id = 5,
                text = "Cynthia Stanwick",
                team = "Engineering",
                icon = "../../images/mentions/Cynthia-Stanwick.png"
            },
            new EmployeeMention {
                id = 6,
                text = "Brett Wade",
                team = "Analysis",
                icon = "../../images/mentions/Brett-Wade.png"
            },
            new EmployeeMention {
                id = 7,
                text = "Greta Sims",
                team = "QA",
                icon = "../../images/mentions/Greta-Sims.png"
            }
        };
    }
}
