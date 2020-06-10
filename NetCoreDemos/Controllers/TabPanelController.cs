using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class TabPanelController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        public ActionResult SortableClosableTabs() {
            return View(SampleData.DataGridEmployees);
        }

        [HttpGet]
        public object GetCompanies(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(TabPanelData.Companies, loadOptions);
        }
        #endregion
    }
}
