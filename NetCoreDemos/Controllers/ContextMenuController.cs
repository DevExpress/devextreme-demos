using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ContextMenuController : Controller {
        public ActionResult Basics() {
            return View();
        }

        public ActionResult Scrolling() {
            return View();
        }

        public ActionResult Templates() {
            return View();
        }

        [HttpGet]
        
        public ActionResult GetScrollingProducts(DataSourceLoadOptions loadOptions) {
            return Json(DataSourceLoader.Load(ContextMenuData.Products, loadOptions));
        }
    }
}
