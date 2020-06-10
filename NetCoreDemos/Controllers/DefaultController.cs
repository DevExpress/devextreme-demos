using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class DefaultController : Controller {
        public IActionResult Index() {
            return RedirectToAction("Overview", "DataGrid");
        }
    }
}
