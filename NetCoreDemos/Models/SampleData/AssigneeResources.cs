using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AssigneeResource> AssigneeResources = new[] {
            new AssigneeResource {
                Id = 1,
                Text = "Samantha Bright",
                Color = "#727bd2"
            },
            new AssigneeResource {
                Id = 2,
                Text = "John Heart",
                Color = "#32c9ed"
            },
            new AssigneeResource {
                Id = 3,
                Text = "Todd Hoffman",
                Color = "#2a7ee4"
            },
            new AssigneeResource {
                Id = 4,
                Text = "Sandra Johnson",
                Color = "#7b49d3"
            }
        };
    }
}
