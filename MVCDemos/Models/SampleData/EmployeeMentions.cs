using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeMention> EmployeeMentions = new[] {
            new EmployeeMention {
                id = 1,
                text = "John Heart",
                team = "Engineering",
                icon = "../../Content/images/mentions/John-Heart.png"
            },
            new EmployeeMention {
                id = 2,
                text = "Kevin Carter",
                team = "Engineering",
                icon = "../../Content/images/mentions/Kevin-Carter.png"
            },
            new EmployeeMention {
                id = 3,
                text = "Olivia Peyton",
                team = "Management",
                icon = "../../Content/images/mentions/Olivia-Peyton.png"
            },
            new EmployeeMention {
                id = 4,
                text = "Robert Reagan",
                team = "Management",
                icon = "../../Content/images/mentions/Robert-Reagan.png"
            },
            new EmployeeMention {
                id = 5,
                text = "Cynthia Stanwick",
                team = "Engineering",
                icon = "../../Content/images/mentions/Cynthia-Stanwick.png"
            },
            new EmployeeMention {
                id = 6,
                text = "Brett Wade",
                team = "Analysis",
                icon = "../../Content/images/mentions/Brett-Wade.png"
            },
            new EmployeeMention {
                id = 7,
                text = "Greta Sims",
                team = "QA",
                icon = "../../Content/images/mentions/Greta-Sims.png"
            }
        };
    }
}
