using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<DynamicAppointmentsResource> DynamicAppointmentsResources = new[] {
            new DynamicAppointmentsResource {
                Id = 1,
                Text = "His Girl Friday",
                Image = "../../Content/Images/movies/HisGirlFriday.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 2,
                Text = "Royal Wedding",
                Image = "../../Content/Images/movies/RoyalWedding.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 3,
                Text = "A Star Is Born",
                Image = "../../Content/Images/movies/AStartIsBorn.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 4,
                Text = "The Screaming Skull",
                Image = "../../Content/Images/movies/ScreamingSkull.jpg"
            },
            new DynamicAppointmentsResource {
                Id = 5,
                Text = "It's a Wonderful Life",
                Image = "../../Content/Images/movies/ItsAWonderfulLife.jpg"
            }
        };
    }
}
