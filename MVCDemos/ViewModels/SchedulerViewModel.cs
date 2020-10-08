using DevExtreme.MVC.Demos.Models;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class SchedulerViewModel {
        public IEnumerable<CinemaAppointment> CinemaData { get; set; }
        public IEnumerable<Movie> Movies { get; set; }
        public IEnumerable<Theatre> Theatres { get; set; }
    }
}
