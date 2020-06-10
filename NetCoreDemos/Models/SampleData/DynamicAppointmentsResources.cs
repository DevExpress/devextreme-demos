using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<DynamicAppointmentsResource> DynamicAppointmentsResources = new[] {
            new DynamicAppointmentsResource {
                Id = 1,
                Text = "His Girl Friday",
                Image = "../../images/movies/HisGirlFriday.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 2,
                Text = "Royal Wedding",
                Image = "../../images/movies/RoyalWedding.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 3,
                Text = "A Star Is Born",
                Image = "../../images/movies/AStartIsBorn.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 4,
                Text = "The Screaming Skull",
                Image = "../../images/movies/ScreamingSkull.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 5,
                Text = "It's a Wonderful Life",
                Image = "../../images/movies/ItsAWonderfulLife.jpg"
            }
        };
    }
}
