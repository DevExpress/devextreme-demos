using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class ResizableController : Controller {
        public ActionResult Overview() {
            return View(SampleData.Orders);
        }
    }
}
