using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ResizableController : Controller {
        public ActionResult ResizableOverview() {
            return View(SampleData.Orders);
        }
    }
}
