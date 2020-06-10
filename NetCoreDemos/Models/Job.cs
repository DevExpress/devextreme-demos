using System;

namespace DevExtreme.NETCore.Demos.Models {
    public class Job {
        public string Text { get; set; }
        public int PriorityId { get; set; }
        public int TypeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string RecurrenceRule { get; set; }
    }
}
