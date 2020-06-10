using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class DrawerController : Controller {
        public ActionResult LeftOrRightPosition() {
            return View(SampleData.NavigationItemsWithIcon);
        }

        public ActionResult TopOrBottomPosition() {
            return View(SampleData.NavigationItems);
        }
    }
}
