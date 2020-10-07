using System;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class AppointmentWithResources : Appointment {
        public int OwnerId { get; set; }
        public int RoomId { get; set; }
        public int PriorityId { get; set; }
    }
}
