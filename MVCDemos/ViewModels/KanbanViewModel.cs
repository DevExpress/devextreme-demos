using DevExtreme.MVC.Demos.Models.TreeList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class KanbanViewModel {
        public IEnumerable<string> Statuses { get; set; }
        public IEnumerable<EmployeeTask> Tasks { get; set; }
        public IEnumerable<TaskEmployee> Employees { get; set; }
    }
}
