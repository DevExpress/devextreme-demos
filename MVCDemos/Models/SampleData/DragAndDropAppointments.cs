using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Appointment> DragAndDropAppointments = new[] {
            new Appointment {
                AppointmentId = 1,
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-04-26T19:00:00.000Z",
                EndDate = "2021-04-26T20:00:00.000Z",
                AllDay = true,
            },
            new Appointment {
                AppointmentId = 2,
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-04-27T17:00:00.000Z",
                EndDate = "2021-04-27T18:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 3,
                Text = "Final Budget Review",
                StartDate = "2021-04-27T19:00:00.000Z",
                EndDate = "2021-04-27T20:35:00.000Z"
            },
            new Appointment {
                AppointmentId = 4,
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-04-28T19:00:00.000Z",
                EndDate = "2021-04-28T21:00:00.000Z"
            },
            new Appointment {
                AppointmentId = 5,
                Text = "Customer Workshop",
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T19:00:00.000Z",
                AllDay = true,
            },
            new Appointment {
                AppointmentId = 6,
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T20:30:00.000Z"
            }
        };
    }
}
