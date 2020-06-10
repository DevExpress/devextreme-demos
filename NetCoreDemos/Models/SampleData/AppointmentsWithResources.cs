using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentWithResources> AppointmentsWithResources = new[] {
            new AppointmentWithResources {
                AppointmentId = 1,
                Text = "Website Re-Design Plan",
                OwnerId = 4,
                RoomId = 1,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 22, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 22, 11, 30, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 2,
                Text = "Book Flights to San Fran for Sales Trip",
                OwnerId = 2,
                RoomId = 2,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 22, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 22, 13, 0, 0),
                AllDay = true
            },
            new AppointmentWithResources {
                AppointmentId = 3,
                OwnerId = 1,
                RoomId = 1,
                PriorityId = 2,
                Text = "Install New Router in Dev Room",
                StartDate = new DateTime(2017, 5, 22, 14, 30, 0),
                EndDate = new DateTime(2017, 5, 22, 15, 30, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 4,
                Text = "Approve Personal Computer Upgrade Plan",
                OwnerId = 3,
                RoomId = 2,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 23, 10, 0, 0),
                EndDate = new DateTime(2017, 5, 23, 11, 0, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 5,
                Text = "Final Budget Review",
                OwnerId = 1,
                RoomId = 1,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 23, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 23, 13, 35, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 6,
                Text = "New Brochures",
                OwnerId = 4,
                RoomId = 3,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 23, 14, 30, 0),
                EndDate = new DateTime(2017, 5, 23, 15, 45, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 7,
                Text = "Install New Database",
                OwnerId = 2,
                RoomId = 3,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 24, 9, 45, 0),
                EndDate = new DateTime(2017, 5, 24, 11, 15, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 8,
                Text = "Approve New Online Marketing Strategy",
                OwnerId = 4,
                RoomId = 2,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 24, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 24, 14, 0, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 9,
                Text = "Upgrade Personal Computers",
                OwnerId = 2,
                RoomId = 2,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 24, 15, 15, 0),
                EndDate = new DateTime(2017, 5, 24, 16, 30, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 10,
                Text = "Customer Workshop",
                OwnerId = 3,
                RoomId = 3,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 25, 11, 0, 0),
                EndDate = new DateTime(2017, 5, 25, 12, 0, 0),
                AllDay = true
            },
            new AppointmentWithResources {
                AppointmentId = 11,
                Text = "Prepare 2017 Marketing Plan",
                OwnerId = 1,
                RoomId = 1,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 25, 11, 0, 0),
                EndDate = new DateTime(2017, 5, 25, 13, 30, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 12,
                Text = "Brochure Design Review",
                OwnerId = 4,
                RoomId = 1,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 25, 14, 0, 0),
                EndDate = new DateTime(2017, 5, 25, 15, 30, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 13,
                Text = "Create Icons for Website",
                OwnerId = 3,
                RoomId = 3,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 26, 10, 0, 0),
                EndDate = new DateTime(2017, 5, 26, 11, 30, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 14,
                Text = "Upgrade Server Hardware",
                OwnerId = 4,
                RoomId = 2,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 26, 14, 30, 0),
                EndDate = new DateTime(2017, 5, 26, 16, 0, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 15,
                Text = "Submit New Website Design",
                OwnerId = 1,
                RoomId = 1,
                PriorityId = 2,
                StartDate = new DateTime(2017, 5, 26, 16, 30, 0),
                EndDate = new DateTime(2017, 5, 26, 18, 0, 0)
            },
            new AppointmentWithResources {
                AppointmentId = 16,
                Text = "Launch New Website",
                OwnerId = 2,
                RoomId = 3,
                PriorityId = 1,
                StartDate = new DateTime(2017, 5, 26, 12, 20, 0),
                EndDate = new DateTime(2017, 5, 26, 14, 0, 0)
            }
        };
    }
}
