using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class TabPanelController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        public ActionResult SortableClosableTabs() {
            return View(SampleData.DataGridEmployees);
        }

        [HttpGet]
        public ActionResult GetCompanies(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TabPanelData.Companies, loadOptions)), "application/json");
        }
        #endregion
    }
}
