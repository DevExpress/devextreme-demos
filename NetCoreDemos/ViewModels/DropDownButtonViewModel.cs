using DevExtreme.NETCore.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class DropDownButtonViewModel {
        public IEnumerable<string> Downloads { get; set; }
        public IEnumerable<string> Colors { get; set; }
        public IEnumerable<ExtendedListItemData> Alignments { get; set; }
        public IEnumerable<SimpleData> FontSizes { get; set; }
        public IEnumerable<SimpleData> LineHeights { get; set; }
        public IEnumerable<ExtendedListItemData> ProfileSettings { get; set; }
    }
}
