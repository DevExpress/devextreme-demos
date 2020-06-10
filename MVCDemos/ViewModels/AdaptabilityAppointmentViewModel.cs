using DevExtreme.MVC.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class AdaptabilityAppointmentViewModel {
        public IEnumerable<AdaptabilityAppointment> Appointments { get; set; }
        public IEnumerable<PriorityResource> Priorities { get; set; }
    }
}
