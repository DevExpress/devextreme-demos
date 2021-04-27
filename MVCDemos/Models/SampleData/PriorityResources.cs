using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<PriorityResource> PriorityResources = new[] {
            new PriorityResource {
                Id = 1,
                Text = "High",
                Color = "#cc5c53"
            },
            new PriorityResource {
                Id = 2,
                Text = "Low",
                Color = "#ff9747"
            }
        };
    }
}
