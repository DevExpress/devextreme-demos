using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
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

        #region Adaptability
        public ActionResult Adaptability() {
            return View(new ToolbarViewModel() {
                FontFamilies = ToolbarData.FontFamilies,
                FontSizes = ToolbarData.FontSizes,
                LineHeights = ToolbarData.LineHeights,
            });
        }
        #endregion
    }
}
