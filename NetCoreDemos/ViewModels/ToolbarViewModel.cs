using DevExtreme.NETCore.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class ToolbarViewModel {
        public IEnumerable<SimpleData> FontFamilies { get; set; }
        public IEnumerable<SimpleData> Headings { get; set; }
        public IEnumerable<SimpleData> FontSizes { get; set; }
        public IEnumerable<SimpleData> LineHeights { get; set; }
    }
}
