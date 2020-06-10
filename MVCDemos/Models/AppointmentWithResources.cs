using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models {
    public class AppointmentWithResources {
        public int AppointmentId { get; set; }
        public string Text { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool AllDay { get; set; }
        public int OwnerId { get; set; }
        public int RoomId { get; set; }
        public int PriorityId { get; set; }
    }
}
