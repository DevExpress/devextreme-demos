using DevExtreme.MVC.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class DynamicAppointmentsViewModel {
        public IEnumerable<DynamicAppointment> Appointments { get; set; }

        public IEnumerable<DynamicAppointmentsResource> Resources { get; set; }
    }
}
