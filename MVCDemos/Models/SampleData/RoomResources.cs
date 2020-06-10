using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<RoomResource> RoomResources = new[] {
            new RoomResource {
                Id = 1,
                Text = "Room 1",
                Color = "#00af2c"
            },
            new RoomResource {
                Id = 2,
                Text = "Room 2",
                Color = "#56ca85"
            },
            new RoomResource {
                Id = 3,
                Text = "Room 3",
                Color = "#8ecd3c"
            }
        };
    }
}
