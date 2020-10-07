using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    public class InMemoryAppointmentsDataContext : InMemoryDataContext<AppointmentTest> {

        public InMemoryAppointmentsDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<AppointmentTest> Appointments => ItemsInternal;


        protected override IEnumerable<AppointmentTest> Source => SampleData.SampleData.Appointments;

        protected override int GetKey(AppointmentTest item) => item.AppointmentId;

        protected override void SetKey(AppointmentTest item, int key) => item.AppointmentId = key;
    }
}
