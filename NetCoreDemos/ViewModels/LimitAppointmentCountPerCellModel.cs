using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class LimitAppointmentCountPerCellModel {
        public IEnumerable<AdaptiveAppointment> Appointments { get; set; }

        public IEnumerable<AdaptiveAppointmentsResource> Resources { get; set; }
    }
}
