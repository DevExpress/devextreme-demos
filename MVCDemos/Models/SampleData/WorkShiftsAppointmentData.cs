using System;
using System.Collections.Generic;
using static System.Net.Mime.MediaTypeNames;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Appointment> WorkShiftsAppointments = new[] {
            new Appointment {
              Text = "Website Re-Design Plan",
              StartDate = "2021-03-29T16:00:00.000Z",
              EndDate = "2021-03-29T18:00:00.000Z",
            }, new Appointment {
              Text = "Approve Personal Computer Upgrade Plan",
              StartDate = "2021-03-31T01:30:00.000Z",
              EndDate = "2021-03-31T02:00:00.000Z",
            }, new Appointment {
              Text = "Final Budget Review",
              StartDate = "2021-03-30T16:30:00.000Z",
              EndDate = "2021-03-30T18:05:00.000Z",
            }, new Appointment {
              Text = "New Brochures",
              StartDate = "2021-04-01T23:30:00.000Z",
              EndDate = "2021-04-02T02:30:00.000Z",
            }, new Appointment {
              Text = "Approve New Online Marketing Strategy",
              StartDate = "2021-03-31T16:30:00.000Z",
              EndDate = "2021-03-31T18:30:00.000Z",
            }, new Appointment {
              Text = "Prepare 2021 Marketing Plan",
              StartDate = "2021-04-01T16:30:00.000Z",
              EndDate = "2021-04-01T17:30:00.000Z",
            }, new Appointment {
              Text = "Brochure Design Review",
              StartDate = "2021-04-02T17:30:00.000Z",
              EndDate = "2021-04-02T19:00:00.000Z",
            }, new Appointment {
              Text = "Create Icons for Website",
              StartDate = "2021-04-01T18:00:00.000Z",
              EndDate = "2021-04-01T19:30:00.000Z",
            }, new Appointment {
              Text = "Submit New Website Design",
              StartDate = "2021-04-02T09:30:00.000Z",
              EndDate = "2021-04-02T11:00:00.000Z",
            }, new Appointment {
              Text = "Launch New Website",
              StartDate = "2021-04-01T01:30:00.000Z",
              EndDate = "2021-04-01T02:30:00.000Z",
              RecurrenceRule = "FREQ=WEEKLY;BYDAY=WE;INTERVAL=2",
            }, new Appointment {
              Text = "Install New Router in Dev Room",
              StartDate = "2021-03-29T08:00:00.000Z",
              EndDate = "2021-03-29T09:00:00.000Z",
            }, new Appointment {
              Text = "Upgrade Personal Computers",
              StartDate = "2021-03-30T01:00:00.000Z",
              EndDate = "2021-03-30T03:00:00.000Z",
            }, new Appointment {
              Text = "Install New Database",
              StartDate = "2021-03-31T08:30:00.000Z",
              EndDate = "2021-03-31T10:00:00.000Z",
            }, new Appointment {
              Text = "Update Customer Shipping Profiles",
              StartDate = "2021-04-01T09:30:00.000Z",
              EndDate = "2021-04-01T11:00:00.000Z",
              RecurrenceRule = "FREQ=WEEKLY;BYDAY=TH",
            }, new Appointment {
              Text = "Upgrade Server Hardware",
              StartDate = "2021-03-30T08:30:00.000Z",
              EndDate = "2021-03-30T11:00:00.000Z",
              RecurrenceRule = "FREQ=MONTHLY;BYMONTHDAY=30",
            }
        };
    }
}
