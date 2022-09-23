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

        public static readonly IEnumerable<SimpleData> FontSizes = new[] {
            new SimpleData{ Text = "10px", Value = "10" },
            new SimpleData{ Text = "12px", Value = "12" },
            new SimpleData{ Text = "14px", Value = "14" },
            new SimpleData{ Text = "16px", Value = "16" },
            new SimpleData{ Text = "18px", Value = "18" }
        };

        public static readonly IEnumerable<FontStyle> FontStyles = new[] {
            new FontStyle{ Icon = "bold", Hint = "Bold", Style = "bold" },
            new FontStyle{ Icon = "italic", Hint = "Italic", Style = "italic" },
            new FontStyle{ Icon = "underline", Hint = "Underlined", Style = "underline" },
            new FontStyle{ Icon = "strike", Hint = "Strikethrough", Style = "strike" }
        };

        public static readonly IEnumerable<SimpleData> LineHeights = new[] {
            new SimpleData{ Text = "1", Value = "1" },
            new SimpleData{ Text = "1.35", Value = "1.35" },
            new SimpleData{ Text = "1.5", Value = "1.5" },
            new SimpleData{ Text = "2", Value = "2" }
        };

        public static readonly IEnumerable<ListType> ListTypes = new[] {
            new ListType{ Icon = "orderedlist", Alignment = "orderedlist", Hint = "Ordered" },
            new ListType{ Icon = "bulletlist", Alignment = "bulletlist", Hint = "Bullet" }
        };

        public static readonly IEnumerable<TextAlign> TextAligns = new[] {
            new TextAlign{ Icon = "alignleft", Hint = "Align left", Alignment = "left" },
            new TextAlign{ Icon = "aligncenter", Hint = "Center", Alignment = "center" },
            new TextAlign{ Icon = "alignright", Hint = "Align right", Alignment = "right" },
            new TextAlign{ Icon = "alignjustify", Hint = "Justify", Alignment = "justify" }
        };

        public static readonly IEnumerable<TextAlign> TextAlignsExtended = new[] {
            new TextAlign{ Icon = "alignleft", Hint = "Align left", Alignment = "left", Text = "Align left" },
            new TextAlign{ Icon = "aligncenter", Hint = "Center", Alignment = "center", Text = "Center" },
            new TextAlign{ Icon = "alignright", Hint = "Align right", Alignment = "right", Text = "Align right" },
            new TextAlign{ Icon = "alignjustify", Hint = "Justify", Alignment = "justify", Text = "Justify" }
        };
        
        public static readonly IEnumerable<SimpleData> ToolbarModes = new[] {
            new SimpleData{ Text = "Multiline mode", Value = true },
            new SimpleData{ Text = "Singleline mode", Value = false }
        };
    }
}
