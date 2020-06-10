using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class InMemoryAppointmentsDataContext : InMemoryDataContext<Appointment> {
        public ICollection<Appointment> Appointments => ItemsInternal;
        protected override IEnumerable<Appointment> Source => SampleData.SampleData.Appointments;
        protected override int GetKey(Appointment item) => item.AppointmentId;
        protected override void SetKey(Appointment item, int key) => item.AppointmentId = key;
    }
}
