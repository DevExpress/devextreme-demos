using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class MultiViewController : Controller {
        public ActionResult Overview() {
            return View(SampleData.Stores);
        }
    }
}
