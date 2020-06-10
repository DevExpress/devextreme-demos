using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AdaptiveAppointmentsResource> AdaptiveAppointmentsResources = new[] {
            new AdaptiveAppointmentsResource {
                Id = 1,
                Text = "Room 401",
                Color = "#bbd806"
            },
            new AdaptiveAppointmentsResource {
                Id = 2,
                Text = "Room 402",
                Color = "#f34c8a"
            },
            new AdaptiveAppointmentsResource {
                Id = 3,
                Text = "Room 403",
                Color = "#ae7fcc"
            },
            new AdaptiveAppointmentsResource {
                Id = 4,
                Text = "Room 407",
                Color = "#ff8817"
            },
            new AdaptiveAppointmentsResource {
                Id = 5,
                Text = "Room 409",
                Color = "#03bb92"
            }
        };
    }
}
