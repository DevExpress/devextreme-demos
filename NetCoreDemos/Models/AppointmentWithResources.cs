using System;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class AppointmentWithResources : AppointmentTest {
        public int OwnerId { get; set; }
        public int RoomId { get; set; }
        public int PriorityId { get; set; }
    }
}
