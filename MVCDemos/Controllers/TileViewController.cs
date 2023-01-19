using DevExtreme.MVC.Demos.Models.SampleData;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class TileViewController : Controller
    {
        public ActionResult Basics()
        {
            return View(SampleData.TileViewItems);
        }

        public ActionResult Directions() {
            return View(SampleData.TileViewItems);
        }
    }
}
