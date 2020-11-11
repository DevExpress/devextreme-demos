using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AdaptabilityAppointment> AdaptabilityAppointments = new[] {
            new AdaptabilityAppointment {
                Text = "Website Re-Design Plan",
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,FR;WKST=TU;INTERVAL=2;COUNT=32",
            },
            new AdaptabilityAppointment {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,FR;INTERVAL=4;COUNT=32",
                AllDay = true,
                PriorityId = 1
            },
            new AdaptabilityAppointment {
                Text = "Install New Router in Dev Room",
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=FR;INTERVAL=2;COUNT=32"
            },
            new AdaptabilityAppointment {
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-04-05T17:00:00.000Z",
                EndDate = "2021-04-05T18:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=WE;INTERVAL=2;COUNT=32",
                PriorityId = 2
            },
            new AdaptabilityAppointment {
                Text = "Final Budget Review",
                StartDate = "2021-05-27T19:00:00.000Z",
                EndDate = "2021-05-27T20:35:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "New Brochures",
                StartDate = "2021-05-27T21:30:00.000Z",
                EndDate = "2021-05-27T22:45:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Install New Database",
                StartDate = "2021-05-27T16:45:00.000Z",
                EndDate = "2021-05-27T18:15:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-05-27T19:00:00.000Z",
                EndDate = "2021-05-27T21:00:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-27T22:15:00.000Z",
                EndDate = "2021-05-27T23:30:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-28T22:15:00.000Z",
                EndDate = "2021-05-28T23:30:00.000Z"
            }
        };
    }
}
