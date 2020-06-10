using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class DrawerController : Controller {
        public ActionResult LeftOrRightPosition() {
            return View(SampleData.NavigationItemsWithIcon);
        }

        public ActionResult TopOrBottomPosition() {
            return View(SampleData.NavigationItems);
        }
    }
}
