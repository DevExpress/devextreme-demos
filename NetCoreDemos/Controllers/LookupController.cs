using DevExtreme.NETCore.Demos.Models.SampleData;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
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
