using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Job> JobAppointments = new[] {
            new Job {
                Text = "Walking a dog",
                PriorityId = 1,
                TypeId = 1,
                StartDate = "2021-05-24T15:00:00.000Z",
                EndDate = "2021-05-25T01:30:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20210530"
            },
            new Job {
                Text = "Website Re-Design Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-24T16:00:00.000Z",
                EndDate = "2021-05-24T18:30:00.000Z"
            },
            new Job {
                Text = "Book Flights to San Fran for Sales Trip",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-24T19:00:00.000Z",
                EndDate = "2021-05-24T20:00:00.000Z"
            },
            new Job {
                Text = "Install New Router in Dev Room",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-24T21:30:00.000Z",
                EndDate = "2021-05-24T22:30:00.000Z"
            },
            new Job {
                Text = "Go Grocery Shopping",
                PriorityId = 1,
                TypeId = 1,
                StartDate = "2021-05-24T15:30:00.000Z",
                EndDate = "2021-05-25T02:30:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,WE,FR;UNTIL=20210530"
            },
            new Job {
                Text = "Approve Personal Computer Upgrade Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-25T17:00:00.000Z",
                EndDate = "2021-05-25T18:00:00.000Z"
            },
            new Job {
                Text = "Final Budget Review",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-25T19:00:00.000Z",
                EndDate = "2021-05-25T20:35:00.000Z"
            },
            new Job {
                Text = "New Brochures",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-25T21:30:00.000Z",
                EndDate = "2021-05-25T22:45:00.000Z"
            },
            new Job {
                Text = "Install New Database",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-26T16:45:00.000Z",
                EndDate = "2021-05-26T18:15:00.000Z"
            },
            new Job {
                Text = "Approve New Online Marketing Strategy",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-26T19:00:00.000Z",
                EndDate = "2021-05-26T21:00:00.000Z"
            },
            new Job {
                Text = "Upgrade Personal Computers",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-26T22:15:00.000Z",
                EndDate = "2021-05-26T23:30:00.000Z"
            },
            new Job {
                Text = "Prepare 2021 Marketing Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-27T18:00:00.000Z",
                EndDate = "2021-05-27T20:30:00.000Z"
            },
            new Job {
                Text = "Brochure Design Review",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-27T21:00:00.000Z",
                EndDate = "2021-05-27T22:30:00.000Z"
            },
            new Job {
                Text = "Create Icons for Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-28T17:00:00.000Z",
                EndDate = "2021-05-28T18:30:00.000Z"
            },
            new Job {
                Text = "Upgrade Server Hardware",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-28T21:30:00.000Z",
                EndDate = "2021-05-28T23:00:00.000Z"
            },
            new Job {
                Text = "Submit New Website Design",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-28T23:30:00.000Z",
                EndDate = "2021-05-29T01:00:00.000Z"
            },
            new Job {
                Text = "Launch New Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-28T19:20:00.000Z",
                EndDate = "2021-05-28T21:00:00.000Z"
            },
            new Job {
                Text = "Visiting a Doctor",
                PriorityId = 2,
                TypeId = 1,
                StartDate = "2021-05-29T17:00:00.000Z",
                EndDate = "2021-05-29T20:30:00.000Z"
            }
        };
    }
}
