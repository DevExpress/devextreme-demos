using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AdaptabilityAppointment> AdaptabilityAppointments = new[] {
            new AdaptabilityAppointment {
                Text = "Website Re-Design Plan",
                StartDate = new DateTime(2017, 5, 1, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 1, 11, 30, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,FR;WKST=TU;INTERVAL=2;COUNT=32"
            },
            new AdaptabilityAppointment {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = new DateTime(2017, 5, 1, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 1, 11, 30, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,FR;INTERVAL=4;COUNT=32",
                AllDay = true,
                PriorityId = 1
            },
            new AdaptabilityAppointment {
                Text = "Install New Router in Dev Room",
                StartDate = new DateTime(2017, 5, 1, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 1, 11, 30, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=FR;INTERVAL=2;COUNT=32"
            },
            new AdaptabilityAppointment {
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = new DateTime(2017, 5, 10, 10, 0, 0),
                EndDate = new DateTime(2017, 5, 10, 11, 0, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=WE;INTERVAL=2;COUNT=32",
                PriorityId = 2
            },
            new AdaptabilityAppointment {
                Text = "Final Budget Review",
                StartDate = new DateTime(2017, 5, 25, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 25, 13, 35, 0)
            },
            new AdaptabilityAppointment {
                Text = "New Brochures",
                StartDate = new DateTime(2017, 5, 25, 14, 30, 0),
                EndDate = new DateTime(2017, 5, 25, 15, 45, 0)
            },
            new AdaptabilityAppointment {
                Text = "Install New Database",
                StartDate = new DateTime(2017, 5, 25, 9, 45, 0),
                EndDate = new DateTime(2017, 5, 25, 11, 15, 0)
            },
            new AdaptabilityAppointment {
                Text = "Approve New Online Marketing Strategy",
                StartDate = new DateTime(2017, 5, 25, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 25, 14, 0, 0)
            },
            new AdaptabilityAppointment {
                Text = "Upgrade Personal Computers",
                StartDate = new DateTime(2017, 5, 25, 15, 15, 0),
                EndDate = new DateTime(2017, 5, 25, 16, 30, 0)
            },
            new AdaptabilityAppointment {
                Text = "Upgrade Personal Computers",
                StartDate = new DateTime(2017, 5, 26, 15, 15, 0),
                EndDate = new DateTime(2017, 5, 26, 16, 30, 0)
            }
        };
    }
}
