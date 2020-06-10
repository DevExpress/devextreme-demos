using DevExtreme.MVC.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class LimitAppointmentCountPerCellModel {
        public IEnumerable<AdaptiveAppointment> Appointments { get; set; }

        public IEnumerable<AdaptiveAppointmentsResource> Resources { get; set; }
    }
}
