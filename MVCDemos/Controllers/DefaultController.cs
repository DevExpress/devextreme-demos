using System;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {

    public class DefaultController : Controller {
        public ActionResult Index() {
            return RedirectToAction("Overview", "DataGrid");
        }
    }
}
