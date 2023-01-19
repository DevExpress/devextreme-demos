using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class TileViewController : Controller {
        public ActionResult Basics() {
            return View(SampleData.TileViewItems);
        }

        public ActionResult Directions() {
            return View(SampleData.TileViewItems);
        }
    }
}
