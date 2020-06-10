using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class Employee {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public int ID { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string FirstName { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string LastName { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Phone { get; set; }

        [Display(Name = "Title")]
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Prefix { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Position { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public DateTime? BirthDate { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public DateTime? HireDate { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Notes { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Email { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Address { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string City { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public ICollection<EmployeeTask> Tasks { get; set; }

        [Display(Name = "State")]
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public int? StateID { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string State { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string HomePhone { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Skype { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Picture { get; set; }
    }
}
