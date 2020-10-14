using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Job> Jobs = new[] {
            new Job {
                Text = "Walking a dog",
                PriorityId = 1,
                TypeId = 1,
                StartDate = "2021-05-24T05:00:00.000Z",
                EndDate = "2021-05-24T05:30:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20210530"
            },
            new Job {
                Text = "Website Re-Design Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-24T06:00:00.000Z",
                EndDate = "2021-05-24T08:30:00.000Z"
            },
            new Job {
                Text = "Book Flights to San Fran for Sales Trip",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-24T09:00:00.000Z",
                EndDate = "2021-05-24T10:00:00.000Z"
            },
            new Job {
                Text = "Install New Router in Dev Room",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-24T11:30:00.000Z",
                EndDate = "2021-05-24T12:30:00.000Z"
            },
            new Job {
                Text = "Go Grocery Shopping",
                PriorityId = 1,
                TypeId = 1,
                StartDate = "2021-05-24T15:30:00.000Z",
                EndDate = "2021-05-24T16:30:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=MO,WE,FR;UNTIL=20210530"
            },
            new Job {
                Text = "Approve Personal Computer Upgrade Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-25T07:00:00.000Z",
                EndDate = "2021-05-25T08:00:00.000Z"
            },
            new Job {
                Text = "Final Budget Review",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-25T09:00:00.000Z",
                EndDate = "2021-05-25T10:35:00.000Z"
            },
            new Job {
                Text = "New Brochures",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-25T11:30:00.000Z",
                EndDate = "2021-05-25T12:45:00.000Z"
            },
            new Job {
                Text = "Install New Database",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-26T06:45:00.000Z",
                EndDate = "2021-05-26T08:15:00.000Z"
            },
            new Job {
                Text = "Approve New Online Marketing Strategy",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-26T09:00:00.000Z",
                EndDate = "2021-05-26T11:00:00.000Z"
            },
            new Job {
                Text = "Upgrade Personal Computers",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-26T12:15:00.000Z",
                EndDate = "2021-05-26T13:30:00.000Z"
            },
            new Job {
                Text = "Prepare 2021 Marketing Plan",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T10:30:00.000Z"
            },
            new Job {
                Text = "Brochure Design Review",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-27T11:00:00.000Z",
                EndDate = "2021-05-27T12:30:00.000Z"
            },
            new Job {
                Text = "Create Icons for Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-28T07:00:00.000Z",
                EndDate = "2021-05-28T08:30:00.000Z"
            },
            new Job {
                Text = "Upgrade Server Hardware",
                PriorityId = 1,
                TypeId = 2,
                StartDate = "2021-05-28T11:30:00.000Z",
                EndDate = "2021-05-28T13:00:00.000Z"
            },
            new Job {
                Text = "Submit New Website Design",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-28T13:30:00.000Z",
                EndDate = "2021-05-28T15:00:00.000Z"
            },
            new Job {
                Text = "Launch New Website",
                PriorityId = 2,
                TypeId = 2,
                StartDate = "2021-05-28T09:20:00.000Z",
                EndDate = "2021-05-28T11:00:00.000Z"
            },
            new Job {
                Text = "Visiting a Doctor",
                PriorityId = 2,
                TypeId = 1,
                StartDate = "2021-05-29T07:00:00.000Z",
                EndDate = "2021-05-29T10:30:00.000Z"
            }
        };
    }
}
