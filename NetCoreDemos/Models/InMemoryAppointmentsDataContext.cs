using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    public class InMemoryAppointmentsDataContext : InMemoryDataContext<Appointment> {

        public InMemoryAppointmentsDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<Appointment> Appointments => ItemsInternal;


        protected override IEnumerable<Appointment> Source => SampleData.SampleData.Appointments;

        protected override int GetKey(Appointment item) => item.AppointmentId;

        protected override void SetKey(Appointment item, int key) => item.AppointmentId = key;
    }
}
