using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class SchedulerResourcesViewModel {
        public IEnumerable<AppointmentWithResources> Appointments { get; set; }
        public IEnumerable<AssigneeResource> Assignees { get; set; }
        public IEnumerable<RoomResource> Rooms { get; set; }
        public IEnumerable<PriorityResource> Priorities { get; set; }
    }
}
