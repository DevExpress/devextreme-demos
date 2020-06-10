using DevExtreme.NETCore.Demos.Models.TreeList;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class KanbanViewModel {
        public IEnumerable<string> Statuses { get; set; }
        public IEnumerable<EmployeeTask> Tasks { get; set; }
        public IEnumerable<TaskEmployee> Employees { get; set; }
    }
}
