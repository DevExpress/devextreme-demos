using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class AutocompleteController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View();
        }

        [HttpGet]
        public object GetNames(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Names, loadOptions);
        }

        [HttpGet]
        public object GetSurnames(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Surnames, loadOptions);
        }

        [HttpGet]
        public object GetCities(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Cities, loadOptions);
        }

        [HttpGet]
        public object GetPositions(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Positions, loadOptions);
        }
        #endregion
    }
}
