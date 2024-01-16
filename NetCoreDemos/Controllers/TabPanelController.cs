using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class TabPanelController : Controller {
        public ActionResult Overview() {
            return View();
        }

        public ActionResult Templates() {
            return View();
        }

        public ActionResult SortableClosableTabs() {
            return View(SampleData.DataGridEmployees);
        }

        [HttpGet]
        public ActionResult GetCompanies(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TabPanelData.Companies, loadOptions)), "application/json");
        }

        [HttpGet]
        public ActionResult GetTabPanelItems(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TabPanelData.TabPanelItems, loadOptions)), "application/json");
        }
    }
}
