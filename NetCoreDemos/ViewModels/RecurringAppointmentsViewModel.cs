using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class RecurringAppointmentsViewModel {
        public IEnumerable<RecurringAppointment> Appointments { get; set; }

        public IEnumerable<RecurringAppointmentsResource> Resources { get; set; }
    }
}
