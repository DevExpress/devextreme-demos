using System;
using System.Linq;
using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class WorkShiftsViewModel {
        public IEnumerable<Appointment> Appointments { get; set; }

        public IEnumerable<WorkShift> WorkShifts { get; set; }
    }
}
