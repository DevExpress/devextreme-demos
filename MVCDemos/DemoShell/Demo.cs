using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace DevExtreme.MVC.Demos.DemoShell {
    public class Demo {

        // From menuMeta.json

        public string Title { get; set; }
        public string Controller { get; set; }
        public string Action { get; set; }
        public List<string> MvcAdditionalFiles { get; set; }
        public bool Hidden { get; set; }
        public bool DisplayCode { get; set; } = true;

        [JsonProperty("Widget")]
        string Compat_Widget { set { Controller = value; } }

        [JsonProperty("Name")]
        string Compat_Name { set { Action = value; } }


        // Assigned

        public string DescriptionHtml { get; set; }
        public List<DemoSourceFile> Files { get; } = new List<DemoSourceFile>();


        public string AdditionalCssUrl => $"~/Content/DemosStyles/{Controller}/{Action}.css";

        public string ViewPath => Path.Combine("Views", Controller, Action + ".cshtml");

        public string ControllerPath => Path.Combine("Controllers", Controller + "Controller.cs");
    }

}
