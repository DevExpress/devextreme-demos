using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<OwnerResource> OwnerResources = new[] {
            new OwnerResource {
                Id = 1,
                Text = "Samantha Bright",
                Color = "#727bd2"
            },
            new OwnerResource {
                Id = 2,
                Text = "John Heart",
                Color = "#32c9ed"
            },
            new OwnerResource {
                Id = 3,
                Text = "Todd Hoffman",
                Color = "#2a7ee4"
            },
            new OwnerResource {
                Id = 4,
                Text = "Sandra Johnson",
                Color = "#7b49d3"
            }
        };
    }
}
