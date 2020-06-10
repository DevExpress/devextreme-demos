using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class GanttController : Controller {
        public IActionResult Overview() {
            return View();
        }
    }
}
