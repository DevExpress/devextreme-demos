﻿using System;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class AppointmentWithResources : Appointment {
        public int AssigneeId { get; set; }
        public int RoomId { get; set; }
        public int PriorityId { get; set; }
    }
}
