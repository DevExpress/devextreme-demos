using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class AutocompleteController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        [HttpGet]
        public ActionResult GetNames(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Names, loadOptions)), "application/json");
        }

        [HttpGet]
        public ActionResult GetSurnames(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Surnames, loadOptions)), "application/json");
        }

        [HttpGet]
        public ActionResult GetCities(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Cities, loadOptions)), "application/json");
        }

        [HttpGet]
        public ActionResult GetPositions(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Positions, loadOptions)), "application/json");
        }
        #endregion
    }
}
