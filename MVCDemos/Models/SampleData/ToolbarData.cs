using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class ToolbarData {
        public static readonly IEnumerable<SimpleData> FontFamilies = new[] {
            new SimpleData{ Text = "Arial", Value = "arial" },
            new SimpleData{ Text = "Courier New", Value = "courier_new" },
            new SimpleData{ Text = "Georgia", Value = "georgia" },
            new SimpleData{ Text = "Impact", Value = "impact" },
            new SimpleData{ Text = "Lucida Console", Value = "lucida_console" },
            new SimpleData{ Text = "Tahoma", Value = "tahoma" },
            new SimpleData{ Text = "Times New Roman", Value = "times_new_roman" }
        };
        public static readonly IEnumerable<SimpleData> FontSizes = new[] {
            new SimpleData{ Text = "10px", Value = "10" },
            new SimpleData{ Text = "12px", Value = "12" },
            new SimpleData{ Text = "14px", Value = "14" },
            new SimpleData{ Text = "16px", Value = "16" },
            new SimpleData{ Text = "18px", Value = "18" }
        };
        public static readonly IEnumerable<FontStyle> FontStyles = new[] {
            new FontStyle{ Icon = "bold", Hint = "Bold" },
            new FontStyle{ Icon = "italic", Hint = "Italic" },
            new FontStyle{ Icon = "underline", Hint = "Underlined" },
            new FontStyle{ Icon = "strike", Hint = "Strikethrough" }
        };
        public static readonly IEnumerable<SimpleData> LineHeights = new[] {
            new SimpleData{ Text = "1", Value = "1" },
            new SimpleData{ Text = "1.35", Value = "1.35" },
            new SimpleData{ Text = "1.5", Value = "1.5" },
            new SimpleData{ Text = "2", Value = "2" }
        };
    }
}
