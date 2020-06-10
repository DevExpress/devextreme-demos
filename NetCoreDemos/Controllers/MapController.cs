using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class MapController : Controller {
        public ActionResult ProvidersAndTypes() {
            return View();
        }
        public ActionResult Markers() {
            return View();
        }
        public ActionResult Routes() {
            return View();
        }
    }
}
