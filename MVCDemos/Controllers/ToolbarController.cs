using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.MVC.Demos.Controllers {
    public class ToolbarController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        [HttpGet]
        public ActionResult GetProducts(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Products, loadOptions)), "application/json");
        }
        #endregion

        public ActionResult Multiline() {
            return View(new ToolbarViewModel() {
                FontFamilies = ToolbarViewModel.FontFamilies,
                FontSizes = ToolbarViewModel.FontSizes,
                FontStyles = ToolbarViewModel.FontStyles,
                LineHeights = ToolbarViewModel.LineHeights,
                ListTypes = ToolbarViewModel.ListTypes,
                TextAligns = ToolbarViewModel.TextAligns,
                TextAlignsExtended = ToolbarViewModel.TextAlignsExtended,
                ToolbarModes = ToolbarViewModel.ToolbarModes,
            });
        }
    }
}
