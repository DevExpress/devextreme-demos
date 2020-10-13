using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class DataChange {
        [JsonProperty("key")]
        public object Key { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("data")]
        public object Data { get; set; }
    }
}
