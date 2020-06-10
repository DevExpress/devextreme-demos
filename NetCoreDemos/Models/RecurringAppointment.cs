using System;

namespace DevExtreme.NETCore.Demos.Models {
    public class RecurringAppointment {
        public string Text { get; set; }
        public int RoomId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string RecurrenceRule { get; set; }
        public string RecurrenceException { get; set; }
    }
}
