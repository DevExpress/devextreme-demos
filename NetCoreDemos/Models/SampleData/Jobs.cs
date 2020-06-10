using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Job> Jobs = new[] {
            new Job {
                Text = "Walking a dog",
                PriorityId = 1,
                TypeId = 1,
                StartDate = new DateTime(2015, 5, 25, 8, 0, 0),
                EndDate = new DateTime(2015, 5, 25, 8, 30, 0),
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20150530"
            },
            new Job {
                Text = "Website Re-Design Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 25, 9, 0, 0),
                EndDate = new DateTime(2015, 5, 25, 11, 30, 0)
            },
            new Job {
                Text = "Book Flights to San Fran for Sales Trip",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 25, 12, 0, 0),
                EndDate = new DateTime(2015, 5, 25, 13, 0, 0)
            },
            new Job {
                Text = "Install New Router in Dev Room",
                PriorityId = 1,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 25, 14, 30, 0),
                EndDate = new DateTime(2015, 5, 25, 15, 30, 0)
            },
            new Job {
                Text = "Go Grocery Shopping",
                PriorityId = 1,
                TypeId = 1,
                StartDate = new DateTime(2015, 5, 25, 18, 30, 0),
                EndDate = new DateTime(2015, 5, 25, 19, 30, 0),
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,WE,FR;UNTIL=20150530"
            },
            new Job {
                Text = "Approve Personal Computer Upgrade Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 26, 10, 0, 0),
                EndDate = new DateTime(2015, 5, 26, 11, 0, 0)
            },
            new Job {
                Text = "Final Budget Review",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 26, 12, 0, 0),
                EndDate = new DateTime(2015, 5, 26, 13, 35, 0)
            },
            new Job {
                Text = "New Brochures",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 26, 14, 30, 0),
                EndDate = new DateTime(2015, 5, 26, 15, 45, 0)
            },
            new Job {
                Text = "Install New Database",
                PriorityId = 1,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 27, 9, 45, 0),
                EndDate = new DateTime(2015, 5, 27, 11, 15, 0)
            },
            new Job {
                Text = "Approve New Online Marketing Strategy",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 27, 12, 0, 0),
                EndDate = new DateTime(2015, 5, 27, 14, 0, 0)
            },
            new Job {
                Text = "Upgrade Personal Computers",
                PriorityId = 1,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 27, 15, 15, 0),
                EndDate = new DateTime(2015, 5, 27, 16, 30, 0)
            },
            new Job {
                Text = "Prepare 2015 Marketing Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 28, 11, 0, 0),
                EndDate = new DateTime(2015, 5, 28, 13, 30, 0)
            },
            new Job {
                Text = "Brochure Design Review",
                PriorityId = 1,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 28, 14, 0, 0),
                EndDate = new DateTime(2015, 5, 28, 15, 30, 0)
            },
            new Job {
                Text = "Create Icons for Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 29, 10, 0, 0),
                EndDate = new DateTime(2015, 5, 29, 11, 30, 0)
            },
            new Job {
                Text = "Upgrade Server Hardware",
                PriorityId = 1,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 29, 14, 30, 0),
                EndDate = new DateTime(2015, 5, 29, 16, 0, 0)
            },
            new Job {
                Text = "Submit New Website Design",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 29, 16, 30, 0),
                EndDate = new DateTime(2015, 5, 29, 18, 0, 0)
            },
            new Job {
                Text = "Launch New Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = new DateTime(2015, 5, 29, 12, 20, 0),
                EndDate = new DateTime(2015, 5, 29, 14, 0, 0)
            },
            new Job {
                Text = "Visiting a Doctor",
                PriorityId = 2,
                TypeId = 1,
                StartDate = new DateTime(2015, 5, 30, 10, 0, 0),
                EndDate = new DateTime(2015, 5, 30, 13, 30, 0)
            }
        };
    }
}
