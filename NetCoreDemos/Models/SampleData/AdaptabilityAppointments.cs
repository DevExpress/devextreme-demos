using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AdaptabilityAppointment> AdaptabilityAppointments = new[] {
            new AdaptabilityAppointment {
                Text = "Website Re-Design Plan",
                StartDate = "2021-04-26T06:30:00.000Z",
                EndDate = "2021-04-26T08:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,FR;WKST=TU;INTERVAL=2;COUNT=32",
            },
            new AdaptabilityAppointment {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-04-26T06:30:00.000Z",
                EndDate = "2021-04-26T08:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,FR;INTERVAL=4;COUNT=32",
                AllDay = true,
                PriorityId = 1
            },
            new AdaptabilityAppointment {
                Text = "Install New Router in Dev Room",
                StartDate = "2021-04-26T06:30:00.000Z",
                EndDate = "2021-04-26T08:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=FR;INTERVAL=2;COUNT=32"
            },
            new AdaptabilityAppointment {
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-05-05T07:00:00.000Z",
                EndDate = "2021-05-05T08:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=WE;INTERVAL=2;COUNT=32",
                PriorityId = 2
            },
            new AdaptabilityAppointment {
                Text = "Final Budget Review",
                StartDate = "2021-05-27T09:00:00.000Z",
                EndDate = "2021-05-27T10:35:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "New Brochures",
                StartDate = "2021-05-27T11:30:00.000Z",
                EndDate = "2021-05-27T12:45:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Install New Database",
                StartDate = "2021-05-27T06:45:00.000Z",
                EndDate = "2021-05-27T08:15:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-05-27T09:00:00.000Z",
                EndDate = "2021-05-27T11:00:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-27T12:15:00.000Z",
                EndDate = "2021-05-27T13:30:00.000Z"
            },
            new AdaptabilityAppointment {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-28T12:15:00.000Z",
                EndDate = "2021-05-28T13:30:00.000Z"
            }
        };
    }
}
