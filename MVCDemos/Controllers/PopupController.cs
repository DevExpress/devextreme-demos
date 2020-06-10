using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class PopupController : Controller {
        public ActionResult Overview() {
            return View(SampleData.DataGridEmployees.Where(e => e.ID > 5 && e.ID < 10));
        }
        public ActionResult Scrolling() {
            return View();
        }
    }
}
