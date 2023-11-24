using DevExtreme.MVC.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class WorkShiftsViewModel {
        public IEnumerable<Appointment> Appointments { get; set; }

        public IEnumerable<WorkShift> WorkShifts { get; set; }
    }
}
