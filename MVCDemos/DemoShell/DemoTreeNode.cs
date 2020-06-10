using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.DemoShell {
    public class DemoTreeNode {
        public string Text { get; set; }

        public string Url { get; set; }

        [JsonProperty(DefaultValueHandling = DefaultValueHandling.Ignore)]
        public List<DemoTreeNode> Items { get; set; }

        [JsonProperty(DefaultValueHandling = DefaultValueHandling.Ignore)]
        public bool Active { get; set; }
    }
}
