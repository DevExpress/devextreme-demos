using DevExtreme.MVC.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class RecurringAppointmentsViewModel {
        public IEnumerable<RecurringAppointment> Appointments { get; set; }

        public IEnumerable<RecurringAppointmentsResource> Resources { get; set; }
    }
}
