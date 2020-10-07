using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Models {
    public class Appointment {
        [JsonProperty(PropertyName = "AppointmentId")]
        public int AppointmentId { get; set; }
        [JsonProperty(PropertyName = "Text")]
        public string Text { get; set; }
        [JsonProperty(PropertyName = "Description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "StartDate")]
        public string StartDate { get; set; }
        [JsonProperty(PropertyName = "EndDate")]
        public string EndDate { get; set; }
        [JsonProperty(PropertyName = "AllDay")]
        public bool AllDay { get; set; }
        [JsonProperty(PropertyName = "RecurrenceRule")]
        public string RecurrenceRule { get; set; }
        [JsonProperty(PropertyName = "RecurrenceException")]
        public string RecurrenceException { get; set; }
    }
}
