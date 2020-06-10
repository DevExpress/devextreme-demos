using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class DropDownButtonController : Controller {
        public ActionResult Overview() {
            return View(new DropDownButtonViewModel() {
                Colors = DropDownButtonData.Colors,
                Alignments = DropDownButtonData.Alignments,
                Downloads = DropDownButtonData.Downloads,
                ProfileSettings = DropDownButtonData.ProfileSettings,
                FontSizes = DropDownButtonData.FontSizes,
                LineHeights = DropDownButtonData.LineHeights
            });
        }
    }
}
