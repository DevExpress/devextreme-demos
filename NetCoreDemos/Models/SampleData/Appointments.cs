﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentTest> Appointments = new[] {
            new AppointmentTest {
                AppointmentId = 1,
                Text = "Website Re-Design Plan",
                StartDate = "2021-05-24T06:30:00.000Z",
                EndDate = "2021-05-24T08:30:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 2,
                Text = "Book Flights to San Fran for Sales Trip",
                StartDate = "2021-05-24T09:00:00.000Z",
                EndDate = "2021-05-24T10:00:00.000Z",
                AllDay = true
            }, new AppointmentTest {
                AppointmentId = 3,
                Text = "Install New Router in Dev Room",
                StartDate = "2021-05-24T11:30:00.000Z",
                EndDate = "2021-05-24T12:30:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 4,
                Text = "Approve Personal Computer Upgrade Plan",
                StartDate = "2021-05-25T07:00:00.000Z",
                EndDate = "2021-05-25T08:00:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 5,
                Text = "Final Budget Review",
                StartDate = "2021-05-25T09:00:00.000Z",
                EndDate = "2021-05-25T10:35:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 6,
                Text = "New Brochures",
                StartDate = "2021-05-25T11:30:00.000Z",
                EndDate = "2021-05-25T12:45:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 7,
                Text = "Install New Database",
                StartDate = "2021-05-26T06:45:00.000Z",
                EndDate = "2021-05-26T08:15:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 8,
                Text = "Approve New Online Marketing Strategy",
                StartDate = "2021-05-26T09:00:00.000Z",
                EndDate = "2021-05-26T11:00:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 9,
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-26T12:15:00.000Z",
                EndDate = "2021-05-26T13:30:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 10,
                Text = "Customer Workshop",
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T09:00:00.000Z",
                AllDay = true
            }, new AppointmentTest {
                AppointmentId = 11,
                Text = "Prepare 2021 Marketing Plan",
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T10:30:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 12,
                Text = "Brochure Design Review",
                StartDate = "2021-05-27T11:00:00.000Z",
                EndDate = "2021-05-27T12:30:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 13,
                Text = "Create Icons for Website",
                StartDate = "2021-05-28T07:00:00.000Z",
                EndDate = "2021-05-28T08:30:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 14,
                Text = "Upgrade Server Hardware",
                StartDate = "2021-05-28T11:30:00.000Z",
                EndDate = "2021-05-28T13:00:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 15,
                Text = "Submit New Website Design",
                StartDate = "2021-05-28T13:30:00.000Z",
                EndDate = "2021-05-28T15:00:00.000Z"
            }, new AppointmentTest {
                AppointmentId = 16,
                Text = "Launch New Website",
                StartDate = "2021-05-28T09:20:00.000Z",
                EndDate = "2021-05-28T11:00:00.000Z"
            }
        };
    }
}
