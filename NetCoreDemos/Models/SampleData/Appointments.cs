using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Appointment> Appointments = new[] {
            new Appointment {
                AppointmentId = 1,
                Text = "Website Re-Design Plan",
                StartDate = "2021-05-24T16:30:00.000Z",
                EndDate = "2021-05-24T18:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 2,
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-05-24T19:00:00.000Z",
                EndDate = "2021-05-24T20:00:00.000Z",
                AllDay = true
            },
            new Appointment {
                AppointmentId = 3,
                Text = "Install New Router in Dev Room",
                StartDate = "2021-05-24T21:30:00.000Z",
                EndDate = "2021-05-24T22:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 4,
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-05-25T17:00:00.000Z",
                EndDate = "2021-05-25T18:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 5,
                Text = "Final Budget Review",
                StartDate = "2021-05-25T19:00:00.000Z",
                EndDate = "2021-05-25T20:35:00.000Z"
            },
            new Appointment {
                AppointmentId = 6,
                Text = "New Brochures",
                StartDate = "2021-05-25T21:30:00.000Z",
                EndDate = "2021-05-25T22:45:00.000Z"
            },
            new Appointment {
                AppointmentId = 7,
                Text = "Install New Database",
                StartDate = "2021-05-26T16:45:00.000Z",
                EndDate = "2021-05-26T18:15:00.000Z"
            },
            new Appointment {
                AppointmentId = 8,
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-05-26T19:00:00.000Z",
                EndDate = "2021-05-26T21:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 9,
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-26T22:15:00.000Z",
                EndDate = "2021-05-26T23:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 10,
                Text = "Customer Workshop",
                StartDate = "2021-05-27T18:00:00.000Z",
                EndDate = "2021-05-27T19:00:00.000Z",
                AllDay = true
            },
            new Appointment {
                AppointmentId = 11,
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-05-27T18:00:00.000Z",
                EndDate = "2021-05-27T20:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 12,
                Text = "Brochure Design Review",
                StartDate = "2021-05-27T21:00:00.000Z",
                EndDate = "2021-05-27T22:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 13,
                Text = "Create Icons for Website",
                StartDate = "2021-05-28T17:00:00.000Z",
                EndDate = "2021-05-28T18:30:00.000Z"
            },
            new Appointment {
                AppointmentId = 14,
                Text = "Upgrade Server Hardware",
                StartDate = "2021-05-28T21:30:00.000Z",
                EndDate = "2021-05-28T23:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 15,
                Text = "Submit New Website Design",
                StartDate = "2021-05-28T23:30:00.000Z",
                EndDate = "2021-05-29T01:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 16,
                Text = "Launch New Website",
                StartDate = "2021-05-28T19:20:00.000Z",
                EndDate = "2021-05-28T21:00:00.000Z"
            }
        };
    }
}
