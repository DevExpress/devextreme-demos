using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class SortableController : Controller {
        public ActionResult Kanban() {
            return View(new KanbanViewModel {
                Tasks = SampleData.EmployeeTasks,
                Statuses = new string[] { "Not Started", "Need Assistance", "In Progress", "Deferred", "Completed" },
                Employees = SampleData.TaskEmployees
            });
        }

        public ActionResult Customization() {
            return View(SampleData.EmployeeTasks.Where(task => task.Task_Parent_ID != 0));
        }
    }
}
