using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ToolbarController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        [HttpGet]
        public object GetProducts(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Products, loadOptions);
        }
        #endregion
    }
}
