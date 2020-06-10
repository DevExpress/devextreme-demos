using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class DynamicAppointmentsViewModel {
        public IEnumerable<DynamicAppointment> Appointments { get; set; }

        public IEnumerable<DynamicAppointmentsResource> Resources { get; set; }
    }
}
