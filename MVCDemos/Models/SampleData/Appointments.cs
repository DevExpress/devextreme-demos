using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Appointment> Appointments = new[] {
            new Appointment {
                AppointmentId = 1,
                Text = "Website Re-Design Plan",
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 2,
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-04-26T19:00:00.000Z",
                EndDate = "2021-04-26T20:00:00.000Z",
                AllDay = true
            },
            new Appointment {
                AppointmentId = 3,
                Text = "Install New Router in Dev Room",
                StartDate = "2021-04-26T21:30:00.000Z",
                EndDate = "2021-04-26T22:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 4,
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-04-27T17:00:00.000Z",
                EndDate = "2021-04-27T18:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 5,
                Text = "Final Budget Review",
                StartDate = "2021-04-27T19:00:00.000Z",
                EndDate = "2021-04-27T20:35:00.000Z"
            },
            new Appointment {
                AppointmentId = 6,
                Text = "New Brochures",
                StartDate = "2021-04-27T21:30:00.000Z",
                EndDate = "2021-04-27T22:45:00.000Z"
            },
            new Appointment {
                AppointmentId = 7,
                Text = "Install New Database",
                StartDate = "2021-04-28T16:45:00.000Z",
                EndDate = "2021-04-28T18:15:00.000Z"
            },
            new Appointment {
                AppointmentId = 8,
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-04-28T19:00:00.000Z",
                EndDate = "2021-04-28T21:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 9,
                Text = "Upgrade Personal Computers",
                StartDate = "2021-04-28T22:15:00.000Z",
                EndDate = "2021-04-28T23:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 10,
                Text = "Customer Workshop",
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T19:00:00.000Z",
                AllDay = true
            },
            new Appointment {
                AppointmentId = 11,
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T20:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 12,
                Text = "Brochure Design Review",
                StartDate = "2021-04-29T21:00:00.000Z",
                EndDate = "2021-04-29T22:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 13,
                Text = "Create Icons for Website",
                StartDate = "2021-04-30T17:00:00.000Z",
                EndDate = "2021-04-30T18:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 14,
                Text = "Upgrade Server Hardware",
                StartDate = "2021-04-30T21:30:00.000Z",
                EndDate = "2021-04-30T23:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 15,
                Text = "Submit New Website Design",
                StartDate = "2021-04-30T23:30:00.000Z",
                EndDate = "2021-05-01T01:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 16,
                Text = "Launch New Website",
                StartDate = "2021-04-30T19:20:00.000Z",
                EndDate = "2021-04-30T21:00:00.000Z"
            }
        };
    }
}
