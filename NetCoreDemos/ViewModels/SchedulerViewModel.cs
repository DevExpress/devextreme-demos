using DevExtreme.NETCore.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class SchedulerViewModel {
        public IEnumerable<CinemaAppointment> CinemaData { get; set; }
        public IEnumerable<Movie> Movies { get; set; }
        public IEnumerable<Theatre> Theatres { get; set; }
    }
}
