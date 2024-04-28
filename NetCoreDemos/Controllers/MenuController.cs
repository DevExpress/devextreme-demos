using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class MenuController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        public ActionResult Scrolling() {
            return View();
        }

        [HttpGet]
        public object GetProducts(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(MenuData.Products, loadOptions);
        }

        [HttpGet]
        public ActionResult GetScrollingProducts(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(MenuScrollingData.Products, loadOptions)), "application/json");
        }
        #endregion
    }
}
