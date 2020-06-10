using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Event> Events = new[] {
            new Event {
                Text = "Stand-up meeting",
                StartDate = "2017-05-22T15:30:00.000Z",
                EndDate = "2017-05-22T15:45:00.000Z",
                RecurrenceRule = "FREQ=DAILY"
            }, new Event {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2017-05-24T18:00:00.000Z",
                EndDate = "2017-05-24T19:00:00.000Z"
            }, new Event {
                Text = "New Brochures",
                StartDate = "2017-05-26T18:30:00.000Z",
                EndDate = "2017-05-26T18:45:00.000Z"
            }, new Event {
                Text = "Website Re-Design Plan",
                StartDate = "2017-05-23T12:30:00.000Z",
                EndDate = "2017-05-23T13:30:00.000Z"
            }, new Event {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2017-05-24T16:00:00.000Z",
                EndDate = "2017-05-24T15:00:00.000Z"
            }, new Event {
                Text = "Prepare 2017 Marketing Plan",
                StartDate = "2017-05-22T07:00:00.000Z",
                EndDate = "2017-05-22T09:30:00.000Z"
            }, new Event {
                Text = "Launch New Website",
                StartDate = "2017-05-24T08:00:00.000Z",
                EndDate = "2017-05-24T10:00:00.000Z"
            }, new Event {
                Text = "Submit New Website Design",
                StartDate = "2017-05-25T09:30:00.000Z",
                EndDate = "2017-05-25T11:00:00.000Z"
            }, new Event {
                Text = "Upgrade Server Hardware",
                StartDate = "2017-05-26T06:30:00.000Z",
                EndDate = "2017-05-26T08:00:00.000Z"
            }, new Event {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2017-05-26T11:00:00.000Z",
                EndDate = "2017-05-26T12:30:00.000Z"
            }, new Event {
                Text = "Final Budget Review",
                StartDate = "2017-05-23T09:00:00.000Z",
                EndDate = "2017-05-23T10:35:00.000Z"
            }
        };
    }
}
