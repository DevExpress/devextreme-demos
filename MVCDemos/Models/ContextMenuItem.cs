using Newtonsoft.Json;
using DevExtreme.AspNet.Mvc;

namespace DevExtreme.MVC.Demos.Models {
    public class ContextMenuItem : RecurringAppointmentsResource {
        [JsonProperty(PropertyName = "onItemClick")]
        public JS OnItemClick { get; set; } = new JS("function() {}");
        [JsonProperty(PropertyName = "beginGroup")]
        public bool BeginGroup { get; set; } = false;
        [JsonProperty(PropertyName = "disabled")]
        public bool Disabled { get; set; } = false;
    }
}
