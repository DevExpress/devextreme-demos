using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentWithResources> AppointmentsWithResources = new[] {
            new AppointmentWithResources {
                Text = "Website Re-Design Plan",
                OwnerId = 4, RoomId = 1, PriorityId = 2,
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Book Flights to San Fran for Sales Trip",
                OwnerId = 2, RoomId = 2, PriorityId = 1,
                StartDate = "2021-04-26T19:00:00.000Z",
                EndDate = "2021-04-26T20:00:00.000Z",
                AllDay = true
            },
            new AppointmentWithResources {
                Text = "Install New Router in Dev Room",
                OwnerId = 1, RoomId = 1, PriorityId = 2,
                StartDate = "2021-04-26T21:30:00.000Z",
                EndDate = "2021-04-26T22:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Approve Personal Computer Upgrade Plan",
                OwnerId = 3, RoomId = 2, PriorityId = 2,
                StartDate = "2021-04-27T17:00:00.000Z",
                EndDate = "2021-04-27T18:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Final Budget Review",
                OwnerId = 1, RoomId = 1, PriorityId = 1,
                StartDate = "2021-04-27T19:00:00.000Z",
                EndDate = "2021-04-27T20:35:00.000Z"
            },
            new AppointmentWithResources {
                Text = "New Brochures",
                OwnerId = 4, RoomId = 3, PriorityId = 2,
                StartDate = "2021-04-27T21:30:00.000Z",
                EndDate = "2021-04-27T22:45:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Install New Database",
                OwnerId = 2, RoomId = 3, PriorityId = 1,
                StartDate = "2021-04-28T16:45:00.000Z",
                EndDate = "2021-04-28T18:15:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Approve New Online Marketing Strategy",
                OwnerId = 4, RoomId = 2, PriorityId = 1,
                StartDate = "2021-04-28T19:00:00.000Z",
                EndDate = "2021-04-28T21:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Upgrade Personal Computers",
                OwnerId = 2, RoomId = 2, PriorityId = 2,
                StartDate = "2021-04-28T22:15:00.000Z",
                EndDate = "2021-04-28T23:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Customer Workshop",
                OwnerId = 3, RoomId = 3, PriorityId = 1,
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T19:00:00.000Z",
                AllDay = true
            },
            new AppointmentWithResources {
                Text = "Prepare 2021 Marketing Plan",
                OwnerId = 1, RoomId = 1, PriorityId = 2,
                StartDate = "2021-04-29T18:00:00.000Z",
                EndDate = "2021-04-29T20:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Brochure Design Review",
                OwnerId = 4, RoomId = 1, PriorityId = 1,
                StartDate = "2021-04-29T21:00:00.000Z",
                EndDate = "2021-04-29T22:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Create Icons for Website",
                OwnerId = 3, RoomId = 3, PriorityId = 1,
                StartDate = "2021-04-30T17:00:00.000Z",
                EndDate = "2021-04-30T18:30:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Upgrade Server Hardware",
                OwnerId = 4, RoomId = 2, PriorityId = 2,
                StartDate = "2021-04-30T21:30:00.000Z",
                EndDate = "2021-04-30T23:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Submit New Website Design",
                OwnerId = 1, RoomId = 1, PriorityId = 2,
                StartDate = "2021-04-30T23:30:00.000Z",
                EndDate = "2021-05-01T01:00:00.000Z"
            },
            new AppointmentWithResources {
                Text = "Launch New Website",
                OwnerId = 2, RoomId = 3, PriorityId = 1,
                StartDate = "2021-04-30T19:20:00.000Z",
                EndDate = "2021-04-30T21:00:00.000Z"
            }
        };
    }
}
