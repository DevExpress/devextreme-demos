using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class DataGridController : Controller {
        public ActionResult ResizableOverview() {
            return View(SampleData.Orders);
        }
    }
}
