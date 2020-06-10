using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FilterBuilderController : Controller {
        public IActionResult WithDataGrid() {
            return View();
        }

        public ActionResult WithList() {
            return View(SampleData.ListProducts);
        }

        public ActionResult Customization() {
            return View();
        }
    }
}
