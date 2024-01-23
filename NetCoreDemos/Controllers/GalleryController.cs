using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class GalleryController : Controller {
        public ActionResult Overview() {
            var images = Enumerable.Range(1, 9).Select(i =>
                new ImageItem {
                    imageSrc = Url.Content(String.Format("~/Content/Images/Gallery/{0}.jpg", i)),
                    imageAlt = String.Format("Image {0}", i)
                }
            ).ToList();

            return View(new GalleryViewModel { Images = images });
        }

        public ActionResult ItemTemplate() {
            return View(SampleData.GalleryItems);
        }
    }
}
