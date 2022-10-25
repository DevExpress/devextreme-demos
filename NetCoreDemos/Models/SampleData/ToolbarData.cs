using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
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
        public static readonly IEnumerable<SimpleData> Headings = new[] {
            new SimpleData{ Text = "Normal text", Value = "normal_text" },
            new SimpleData{ Text = "Heading 1", Value = "heading_1" },
            new SimpleData{ Text = "Heading 2", Value = "heading_2" },
            new SimpleData{ Text = "Heading 3", Value = "heading_3" },
            new SimpleData{ Text = "Heading 4", Value = "heading_4" },
            new SimpleData{ Text = "Heading 5", Value = "heading_5" }
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
