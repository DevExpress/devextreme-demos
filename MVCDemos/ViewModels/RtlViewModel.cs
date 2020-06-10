using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class RtlViewModel {
        public IEnumerable<string> LanguageItems { get; set; }
        public string Text { get; set; }
        public string DisplayExpr { get; set; }
        public bool RtlEnabled { get; set; }
    }
}
