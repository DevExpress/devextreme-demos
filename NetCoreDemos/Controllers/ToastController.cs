using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ToastController : Controller {
        public ActionResult Overview() {
            return View(SampleData.ListProducts.Where(e => e.ID > 3 && e.ID < 8));
        }
    }
}
