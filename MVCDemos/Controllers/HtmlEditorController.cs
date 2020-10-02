using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;

namespace DevExtreme.MVC.Demos.Controllers {
    public class HtmlEditorController : Controller {
        public ActionResult Overview() {
            return View();
        }

        public ActionResult ToolbarCustomization() {
            return View();
        }

        public ActionResult OutputFormats() {
            return View();
        }

        public ActionResult Tables() {
            return View();
        }

        public ActionResult Mentions() {
            return View(SampleData.EmployeeMentions);
        }
    }
}
