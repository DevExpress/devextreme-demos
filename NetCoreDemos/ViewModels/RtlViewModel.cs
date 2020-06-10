using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class RtlViewModel {
        public IEnumerable<string> LanguageItems { get; set; }
        public string Text { get; set; }
        public string DisplayExpr { get; set; }
        public bool RtlEnabled { get; set; }
    }
}
