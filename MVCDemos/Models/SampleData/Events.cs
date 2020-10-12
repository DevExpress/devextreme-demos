using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Event> Events = new[] {
            new Event {
                Text = "Stand-up meeting",
                StartDate = "2021-05-24T15:30:00.000Z",
                EndDate = "2021-05-24T15:45:00.000Z",
                RecurrenceRule = "FREQ=DAILY"
            },
            new Event {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-05-26T18:00:00.000Z",
                EndDate = "2021-05-26T19:00:00.000Z"
            },
            new Event {
                Text = "New Brochures",
                StartDate = "2021-05-28T18:30:00.000Z",
                EndDate = "2021-05-28T18:45:00.000Z"
            },
            new Event {
                Text = "Website Re-Design Plan",
                StartDate = "2021-05-25T12:30:00.000Z",
                EndDate = "2021-05-25T13:30:00.000Z"
            },
            new Event {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-05-26T16:00:00.000Z",
                EndDate = "2021-05-26T15:00:00.000Z"
            },
            new Event {
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-05-24T07:00:00.000Z",
                EndDate = "2021-05-24T09:30:00.000Z"
            },
            new Event {
                Text = "Launch New Website",
                StartDate = "2021-05-26T08:00:00.000Z",
                EndDate = "2021-05-26T10:00:00.000Z"
            },
            new Event {
                Text = "Submit New Website Design",
                StartDate = "2021-05-27T09:30:00.000Z",
                EndDate = "2021-05-27T11:00:00.000Z"
            },
            new Event {
                Text = "Upgrade Server Hardware",
                StartDate = "2021-05-28T06:30:00.000Z",
                EndDate = "2021-05-28T08:00:00.000Z"
            },
            new Event {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-05-28T11:00:00.000Z",
                EndDate = "2021-05-28T12:30:00.000Z"
            },
            new Event {
                Text = "Final Budget Review",
                StartDate = "2021-05-25T09:00:00.000Z",
                EndDate = "2021-05-25T10:35:00.000Z"
            }
        };
    }
}
