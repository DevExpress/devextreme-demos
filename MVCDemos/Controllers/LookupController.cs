using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class LookupController : Controller {
        public ActionResult Basics() {
            return View(SampleData.EmployeesList);
        }

        public ActionResult Templates() {
            return View(SampleData.DataGridEmployees.Take(9));
        }

        public ActionResult EventHandling() {
            return View(SampleData.DataGridEmployees.Take(9));
        }
    }
}
