using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<RecurringAppointmentsResource> RecurringAppointmentsResources = new[] {
            new RecurringAppointmentsResource {
                Id = 1,
                Text = "Room 101",
                Color = "#bbd806"
            },
            new RecurringAppointmentsResource {
                Id = 2,
                Text = "Room 102",
                Color = "#f34c8a"
            },
            new RecurringAppointmentsResource {
                Id = 3,
                Text = "Room 103",
                Color = "#ae7fcc"
            },
            new RecurringAppointmentsResource {
                Id = 4,
                Text = "Meeting room",
                Color = "#ff8817"
            },
            new RecurringAppointmentsResource {
                Id = 5,
                Text = "Conference hall",
                Color = "#03bb92"
            }
        };
    }
}
