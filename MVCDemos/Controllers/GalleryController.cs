using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using System;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class GalleryController : Controller {
        public ActionResult Overview() {
            var images = Enumerable.Range(1, 9).Select(i => Url.Content(String.Format("~/Content/Images/Gallery/{0}.jpg", i)));
            return View(new GalleryViewModel { Images = images });
        }

        public ActionResult ItemTemplate() {
            return View(SampleData.GalleryItems);
        }
    }
}
