using System;

namespace DevExtreme.NETCore.Demos.Models {
    public class CinemaAppointment : Appointment {
        public int TheatreId { get; set; }
        public int MovieId { get; set; }
        public int Price { get; set; }
    }
}
