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
        public IEnumerable<ListType> ListTypes { get; set; }
        public IEnumerable<SimpleData> ToolbarModes { get; set; }
        public IEnumerable<SimpleData> FontFamilies { get; set; }
        public IEnumerable<FontStyle> FontStyles { get; set; }
        public IEnumerable<TextAlign> TextAligns { get; set; }
    }
}
