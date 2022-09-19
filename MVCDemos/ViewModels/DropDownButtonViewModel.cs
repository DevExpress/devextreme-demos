using DevExtreme.MVC.Demos.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class DropDownButtonViewModel {
        public IEnumerable<string> Downloads { get; set; }
        public IEnumerable<string> Colors { get; set; }
        public IEnumerable<ExtendedListItemData> Alignments { get; set; }
        public IEnumerable<SimpleData> FontSizes { get; set; }
        public IEnumerable<SimpleData> LineHeights { get; set; }
        public IEnumerable<ExtendedListItemData> ProfileSettings { get; set; }
        public IEnumerable<ListType> ListTypes { get; set; }
        public IEnumerable<string> ToolbarModes { get; set; }
        public IEnumerable<SimpleData> FontFamilies { get; set; }
        public IEnumerable<FontStyle> FontStyles { get; set; }
        public IEnumerable<TextAlign> TextAligns { get; set; }
    }
}
