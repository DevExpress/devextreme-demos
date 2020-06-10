using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class ToastController : Controller {
        public ActionResult Overview() {
            return View(SampleData.ListProducts.Where(e => e.ID > 3 && e.ID < 8));
        }
    }
}
