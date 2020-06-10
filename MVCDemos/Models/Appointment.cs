using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models {
    public class Appointment {
        public int AppointmentId { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool AllDay { get; set; }
        public string RecurrenceRule { get; set; }
    }
}
