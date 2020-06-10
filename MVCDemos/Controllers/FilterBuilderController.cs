using System.Web.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;

namespace DevExtreme.MVC.Demos.Controllers {
    public class FilterBuilderController : Controller {
        public ActionResult WithDataGrid() {
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
