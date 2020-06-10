using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class PopupController : Controller {
        public ActionResult Overview() {
            return View(SampleData.DataGridEmployees.Where(e => e.ID > 5 && e.ID < 10));
        }
        public ActionResult Scrolling() {
            return View();
        }
    }
}
