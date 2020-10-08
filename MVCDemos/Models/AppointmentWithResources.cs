using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models {
    public class AppointmentWithResources : Appointment {
        public int OwnerId { get; set; }
        public int RoomId { get; set; }
        public int PriorityId { get; set; }
    }
}
