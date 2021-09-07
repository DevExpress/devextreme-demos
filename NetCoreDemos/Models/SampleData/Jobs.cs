using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Job> JobAppointments = new[] {
            new Job {
                Text = "Walking a dog",
                PriorityId = 1,
                TypeId = 1,
                StartDate = "2021-04-26T15:00:00.000Z",
                EndDate = "2021-04-26T15:30:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20210502"
            },
            new Job {
                Text = "Website Re-Design Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-26T16:00:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z"
            },
            new Job {
                Text = "Book Flights to San Fran for Sales Trip",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-26T19:00:00.000Z",
                EndDate = "2021-04-26T20:00:00.000Z"
            },
            new Job {
                Text = "Install New Router in Dev Room",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-04-26T21:30:00.000Z",
                EndDate = "2021-04-26T22:30:00.000Z"
            },
            new Job {
                Text = "Go Grocery Shopping",
                PriorityId = 1,
                TypeId = 1,
                StartDate = "2021-04-27T01:30:00.000Z",
                EndDate = "2021-04-27T02:30:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,WE,FR;UNTIL=20210502"
            },
            new Job {
                Text = "Approve Personal Computer Upgrade Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-27T17:00:00.000Z",
                EndDate = "2021-04-27T18:00:00.000Z"
            },
            new Job {
                Text = "Final Budget Review",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-27T19:00:00.000Z",
                EndDate = "2021-04-27T20:35:00.000Z"
            },
            new Job {
                Text = "New Brochures",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-27T21:30:00.000Z",
                EndDate = "2021-04-27T22:45:00.000Z"
            },
            new Job {
                Text = "Install New Database",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-04-28T16:45:00.000Z",
                EndDate = "2021-04-28T18:15:00.000Z"
            },
            new Job {
                Text = "Approve New Online Marketing Strategy",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-28T19:00:00.000Z",
                EndDate = "2021-04-28T21:00:00.000Z"
            },
            new Job {
                Text = "Upgrade Personal Computers",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-04-28T22:15:00.000Z",
                EndDate = "2021-04-28T23:30:00.000Z"
            },
            new Job {
                Text = "Prepare 2021 Marketing Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T20:30:00.000Z"
            },
            new Job {
                Text = "Brochure Design Review",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-04-29T21:00:00.000Z",
                EndDate = "2021-04-29T22:30:00.000Z"
            },
            new Job {
                Text = "Create Icons for Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-30T17:00:00.000Z",
                EndDate = "2021-04-30T18:30:00.000Z"
            },
            new Job {
                Text = "Upgrade Server Hardware",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-04-30T21:30:00.000Z",
                EndDate = "2021-04-30T23:00:00.000Z"
            },
            new Job {
                Text = "Submit New Website Design",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-30T23:30:00.000Z",
                EndDate = "2021-05-01T01:00:00.000Z"
            },
            new Job {
                Text = "Launch New Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-04-30T19:20:00.000Z",
                EndDate = "2021-04-30T21:00:00.000Z"
            },
            new Job {
                Text = "Visiting a Doctor",
                PriorityId = 2,
                TypeId = 1,
                StartDate = "2021-05-01T17:00:00.000Z",
                EndDate = "2021-05-01T20:30:00.000Z"
            }
        };
    }
}
