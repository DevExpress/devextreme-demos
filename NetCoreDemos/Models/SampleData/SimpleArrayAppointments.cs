using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentTest> SimpleArrayAppointments = new[] {
            new AppointmentTest {
                Text = "Website Re-Design Plan",
                StartDate = "2021-05-24T06:30:00.000Z",
                EndDate = "2021-05-24T08:30:00.000Z"
            }, new AppointmentTest {
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-05-24T09:00:00.000Z",
                EndDate = "2021-05-24T10:00:00.000Z",
                AllDay = true
            }, new AppointmentTest {
                Text = "Install New Router in Dev Room",
                StartDate = "2021-05-24T11:30:00.000Z",
                EndDate = "2021-05-24T12:30:00.000Z"
            }, new AppointmentTest {
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-05-25T07:00:00.000Z",
                EndDate = "2021-05-25T08:00:00.000Z"
            }, new AppointmentTest {
                Text = "Final Budget Review",
                StartDate = "2021-05-25T09:00:00.000Z",
                EndDate = "2021-05-25T10:35:00.000Z"
            }, new AppointmentTest {
                Text = "New Brochures",
                StartDate = "2021-05-25T11:30:00.000Z",
                EndDate = "2021-05-25T12:45:00.000Z"
            }, new AppointmentTest {
                Text = "Install New Database",
                StartDate = "2021-05-26T06:45:00.000Z",
                EndDate = "2021-05-26T08:15:00.000Z"
            }, new AppointmentTest {
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-05-26T09:00:00.000Z",
                EndDate = "2021-05-26T11:00:00.000Z"
            }, new AppointmentTest {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-26T12:15:00.000Z",
                EndDate = "2021-05-26T13:30:00.000Z"
            }, new AppointmentTest {
                Text = "Customer Workshop",
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T09:00:00.000Z",
                AllDay = true
            }, new AppointmentTest {
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T10:30:00.000Z"
            }, new AppointmentTest {
                Text = "Brochure Design Review",
                StartDate = "2021-05-27T11:00:00.000Z",
                EndDate = "2021-05-27T12:30:00.000Z"
            }, new AppointmentTest {
                Text = "Create Icons for Website",
                StartDate = "2021-05-28T07:00:00.000Z",
                EndDate = "2021-05-28T08:30:00.000Z"
            }, new AppointmentTest {
                Text = "Upgrade Server Hardware",
                StartDate = "2021-05-28T11:30:00.000Z",
                EndDate = "2021-05-28T13:00:00.000Z"
            }, new AppointmentTest {
                Text = "Submit New Website Design",
                StartDate = "2021-05-28T13:30:00.000Z",
                EndDate = "2021-05-28T15:00:00.000Z"
            }, new AppointmentTest {
                Text = "Launch New Website",
                StartDate = "2021-05-28T09:20:00.000Z",
                EndDate = "2021-05-28T11:00:00.000Z"
            }
        };
    }
}
