using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Priority { High, Normal, Low, Urgent }

    public class EmployeeAppointment : Appointment {
        public Priority Priority { set; get; }
        public IEnumerable<int> OwnerId { get; set; }
    }

    public class EmployeeTask {
        public int ID { set; get; }
        public string Subject { set; get; }
        public DateTime StartDate { set; get; }
        public DateTime DueDate { set; get; }
        public string Status { set; get; }
        public Priority Priority { set; get; }
        public int Completion { set; get; }
        public IEnumerable<int> OwnerId { get; set; }
        public string Assigned { get; set; }
        public string RecurrenceRule { get; set; }
    }
}
