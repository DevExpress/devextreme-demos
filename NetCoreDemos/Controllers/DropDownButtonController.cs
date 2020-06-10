using DevExtreme.AspNet.Data;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Newtonsoft.Json;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
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
