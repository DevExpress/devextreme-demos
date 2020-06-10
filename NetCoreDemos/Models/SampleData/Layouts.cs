using System;
using System.Collections.Generic;
using System.Linq;
using DevExtreme.AspNet.Mvc;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static IEnumerable<Layout> GetLayouts() {
            return Enum.GetNames(typeof(PivotGridFieldChooserLayout)).Select((name, index) => new Layout {
                Key = index,
                Name = name
            });
        }
    }
}
