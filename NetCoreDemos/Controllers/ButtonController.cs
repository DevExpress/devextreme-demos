using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ButtonController : Controller {
        public ActionResult PredefinedTypes() {
            return View();
        }
        public ActionResult Icons() {
            return View();
        }
    }
}
