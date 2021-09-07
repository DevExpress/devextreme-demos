using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Event> Events = new[] {
            new Event {
                Text = "Stand-up meeting",
                StartDate = "2021-04-26T15:30:00.000Z",
                EndDate = "2021-04-26T15:45:00.000Z",
                RecurrenceRule = "FREQ=DAILY"
            },
            new Event {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-04-28T18:00:00.000Z",
                EndDate = "2021-04-28T19:00:00.000Z"
            },
            new Event {
                Text = "New Brochures",
                StartDate = "2021-04-30T18:30:00.000Z",
                EndDate = "2021-04-30T18:45:00.000Z"
            },
            new Event {
                Text = "Website Re-Design Plan",
                StartDate = "2021-04-27T12:30:00.000Z",
                EndDate = "2021-04-27T13:30:00.000Z"
            },
            new Event {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-04-28T16:00:00.000Z",
                EndDate = "2021-04-28T15:00:00.000Z"
            },
            new Event {
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-04-26T07:00:00.000Z",
                EndDate = "2021-04-26T09:30:00.000Z"
            },
            new Event {
                Text = "Launch New Website",
                StartDate = "2021-04-28T08:00:00.000Z",
                EndDate = "2021-04-28T10:00:00.000Z"
            },
            new Event {
                Text = "Submit New Website Design",
                StartDate = "2021-04-29T09:30:00.000Z",
                EndDate = "2021-04-29T11:00:00.000Z"
            },
            new Event {
                Text = "Upgrade Server Hardware",
                StartDate = "2021-04-30T06:30:00.000Z",
                EndDate = "2021-04-30T08:00:00.000Z"
            },
            new Event {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-04-30T11:00:00.000Z",
                EndDate = "2021-04-30T12:30:00.000Z"
            },
            new Event {
                Text = "Final Budget Review",
                StartDate = "2021-04-27T09:00:00.000Z",
                EndDate = "2021-04-27T10:35:00.000Z"
            }
        };
    }
}
