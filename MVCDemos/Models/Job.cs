using System;

namespace DevExtreme.MVC.Demos.Models {
    public class Job : Appointment {
        public int PriorityId { get; set; }
        public int TypeId { get; set; }
    }
}
