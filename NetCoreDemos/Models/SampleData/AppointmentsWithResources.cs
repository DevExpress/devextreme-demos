using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentWithResources> AppointmentsWithResources = new[] {
            new AppointmentWithResources {
                Text = "Website Re-Design Plan",
                OwnerId = 4, RoomId = 1, PriorityId = 2,
                StartDate = "2021-05-24T06:30:00.000Z",
                EndDate = "2021-05-24T08:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Book Flights to San Fran for Sales Trip",
                OwnerId = 2, RoomId = 2, PriorityId = 1,
                StartDate = "2021-05-24T09:00:00.000Z",
                EndDate = "2021-05-24T10:00:00.000Z",
                AllDay = true
            },
            new AppointmentWithResources {
                Text = "Install New Router in Dev Room",
                OwnerId = 1, RoomId = 1, PriorityId = 2,
                StartDate = "2021-05-24T11:30:00.000Z",
                EndDate = "2021-05-24T12:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Approve Personal Computer Upgrade Plan",
                OwnerId = 3, RoomId = 2, PriorityId = 2,
                StartDate = "2021-05-25T07:00:00.000Z",
                EndDate = "2021-05-25T08:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Final Budget Review",
                OwnerId = 1, RoomId = 1, PriorityId = 1,
                StartDate = "2021-05-25T09:00:00.000Z",
                EndDate = "2021-05-25T10:35:00.000Z"
            },
            new AppointmentWithResources {
                Text = "New Brochures",
                OwnerId = 4, RoomId = 3, PriorityId = 2,
                StartDate = "2021-05-25T11:30:00.000Z",
                EndDate = "2021-05-25T12:45:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Install New Database",
                OwnerId = 2, RoomId = 3, PriorityId = 1,
                StartDate = "2021-05-26T06:45:00.000Z",
                EndDate = "2021-05-26T08:15:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Approve New Online Marketing Strategy",
                OwnerId = 4, RoomId = 2, PriorityId = 1,
                StartDate = "2021-05-26T09:00:00.000Z",
                EndDate = "2021-05-26T11:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Upgrade Personal Computers",
                OwnerId = 2, RoomId = 2, PriorityId = 2,
                StartDate = "2021-05-26T12:15:00.000Z",
                EndDate = "2021-05-26T13:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Customer Workshop",
                OwnerId = 3, RoomId = 3, PriorityId = 1,
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T09:00:00.000Z",
                AllDay = true
            },
            new AppointmentWithResources {
                Text = "Prepare 2021 Marketing Plan",
                OwnerId = 1, RoomId = 1, PriorityId = 2,
                StartDate = "2021-05-27T08:00:00.000Z",
                EndDate = "2021-05-27T10:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Brochure Design Review",
                OwnerId = 4, RoomId = 1, PriorityId = 1,
                StartDate = "2021-05-27T11:00:00.000Z",
                EndDate = "2021-05-27T12:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Create Icons for Website",
                OwnerId = 3, RoomId = 3, PriorityId = 1,
                StartDate = "2021-05-28T07:00:00.000Z",
                EndDate = "2021-05-28T08:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Upgrade Server Hardware",
                OwnerId = 4, RoomId = 2, PriorityId = 2,
                StartDate = "2021-05-28T11:30:00.000Z",
                EndDate = "2021-05-28T13:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Submit New Website Design",
                OwnerId = 1, RoomId = 1, PriorityId = 2,
                StartDate = "2021-05-28T13:30:00.000Z",
                EndDate = "2021-05-28T15:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Launch New Website",
                OwnerId = 2, RoomId = 3, PriorityId = 1,
                StartDate = "2021-05-28T09:20:00.000Z",
                EndDate = "2021-05-28T11:00:00.000Z"
            }
        };
    }
}
