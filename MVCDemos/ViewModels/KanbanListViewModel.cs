using System.Collections.Generic;
using DevExtreme.MVC.Demos.Models.TreeList;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class KanbanListViewModel {
        public string Status { get; set; }
        public IEnumerable<EmployeeTask> Tasks { get; set; }
        public IEnumerable<TaskEmployee> Employees { get; set; }
    }
}
