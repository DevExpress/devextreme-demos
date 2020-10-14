using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class HtmlEditorController : Controller {
        public IActionResult Overview() {
            return View();
        }

        public IActionResult ToolbarCustomization() {
            return View();
        }

        public IActionResult OutputFormats() {
            return View();
        }

        public IActionResult Tables() {
            return View();
        }

        public IActionResult Mentions() {
            return View(SampleData.EmployeeMentions);
        }
    }
}
