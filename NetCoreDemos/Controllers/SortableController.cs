using System.Linq;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class SortableController : Controller {
        public ActionResult Customization() {
            return View(SampleData.EmployeeTasks.Where(task => task.Task_Parent_ID != 0));
        }
        public ActionResult Kanban() {
            return View(new KanbanViewModel {
                Tasks = SampleData.EmployeeTasks,
                Statuses = new string[] { "Not Started", "Need Assistance", "In Progress", "Deferred", "Completed" },
                Employees = SampleData.TaskEmployees
            });
        }
    }
}
