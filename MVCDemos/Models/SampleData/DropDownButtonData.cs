using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class DropDownButtonData {
        public static readonly IEnumerable<string> Colors = new[] { null, "#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff", "#ff3466" };
        public static readonly IEnumerable<string> Downloads = new[] { "Download Trial For Visual Studio", "Download Trial For All Platforms", "Package Managers" };
        public static readonly IEnumerable<ExtendedListItemData> ProfileSettings = new[] {
            new ExtendedListItemData{ Text = "Profile", Value = "1", icon = "user" },
            new ExtendedListItemData{ Text = "Messages", Value = "2", icon = "email", badge = "5" },
            new ExtendedListItemData{ Text = "Friends", Value = "3", icon = "group" },
            new ExtendedListItemData{ Text = "Exit", Value = "4", icon = "runner" }
        };
        public static readonly IEnumerable<ExtendedListItemData> Alignments = new[] {
            new ExtendedListItemData{ Text = "Left", Value = "left", icon = "alignleft" },
            new ExtendedListItemData{ Text = "Right", Value = "right", icon = "alignright" },
            new ExtendedListItemData{ Text = "Center", Value = "center", icon = "aligncenter" },
            new ExtendedListItemData{ Text = "Justify", Value = "justify", icon = "alignjustify" }
        };
        public static readonly IEnumerable<SimpleData> FontSizes = new[] {
            new SimpleData{ Text = "10px", Value = "10" },
            new SimpleData{ Text = "12px", Value = "12" },
            new SimpleData{ Text = "14px", Value = "14" },
            new SimpleData{ Text = "16px", Value = "16" },
            new SimpleData{ Text = "18px", Value = "18" }
        };
        public static readonly IEnumerable<SimpleData> LineHeights = new[] {
            new SimpleData{ Text = "1", Value = "1" },
            new SimpleData{ Text = "1.35", Value = "1.35" },
            new SimpleData{ Text = "1.5", Value = "1.5" },
            new SimpleData{ Text = "2", Value = "2" }
        };
    }
}
