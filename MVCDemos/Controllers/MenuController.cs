using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class MenuController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        [HttpGet]
        public ActionResult GetProducts(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(MenuData.Products, loadOptions)), "application/json");
        }
        #endregion
    }
}
