using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Appointment> SimpleArrayAppointments = new[] {
            new Appointment {
                Text = "Website Re-Design Plan",
                StartDate = "2021-03-29T16:30:00.000Z",
                EndDate = "2021-03-29T18:30:00.000Z"
            },
            new Appointment {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-03-29T19:00:00.000Z",
                EndDate = "2021-03-29T20:00:00.000Z",
                AllDay = true
            },
            new Appointment {
                Text = "Install New Router in Dev Room",
                StartDate = "2021-03-29T21:30:00.000Z",
                EndDate = "2021-03-29T22:30:00.000Z"
            },
            new Appointment {
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-03-30T17:00:00.000Z",
                EndDate = "2021-03-30T18:00:00.000Z"
            },
            new Appointment {
                Text = "Final Budget Review",
                StartDate = "2021-03-30T19:00:00.000Z",
                EndDate = "2021-03-30T20:35:00.000Z"
            },
            new Appointment {
                Text = "New Brochures",
                StartDate = "2021-03-30T21:30:00.000Z",
                EndDate = "2021-03-30T22:45:00.000Z"
            },
            new Appointment {
                Text = "Install New Database",
                StartDate = "2021-03-31T16:45:00.000Z",
                EndDate = "2021-03-31T18:15:00.000Z"
            },
            new Appointment {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-03-31T19:00:00.000Z",
                EndDate = "2021-03-31T21:00:00.000Z"
            },
            new Appointment {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-03-31T22:15:00.000Z",
                EndDate = "2021-03-31T23:30:00.000Z"
            },
            new Appointment {
                Text = "Customer Workshop",
                StartDate = "2021-04-01T18:00:00.000Z",
                EndDate = "2021-04-01T19:00:00.000Z",
                AllDay = true
            },
            new Appointment {
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-04-01T18:00:00.000Z",
                EndDate = "2021-04-01T20:30:00.000Z"
            },
            new Appointment {
                Text = "Brochure Design Review",
                StartDate = "2021-04-01T21:00:00.000Z",
                EndDate = "2021-04-01T22:30:00.000Z"
            },
            new Appointment {
                Text = "Create Icons for Website",
                StartDate = "2021-04-02T17:00:00.000Z",
                EndDate = "2021-04-02T18:30:00.000Z"
            },
            new Appointment {
                Text = "Upgrade Server Hardware",
                StartDate = "2021-04-02T21:30:00.000Z",
                EndDate = "2021-04-02T23:00:00.000Z"
            },
            new Appointment {
                Text = "Submit New Website Design",
                StartDate = "2021-04-02T23:30:00.000Z",
                EndDate = "2021-04-03T01:00:00.000Z"
            },
            new Appointment {
                Text = "Launch New Website",
                StartDate = "2021-04-02T19:20:00.000Z",
                EndDate = "2021-04-02T21:00:00.000Z"
            }
        };
    }
}
