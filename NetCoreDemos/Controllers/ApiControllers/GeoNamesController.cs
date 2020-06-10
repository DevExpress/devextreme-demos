using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Net.Http;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]/[action]")]
    public class GeoNamesController : Controller {
        [HttpGet]
        public object Countries(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Countries, loadOptions);
        }

        [HttpGet]
        public object Cities(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Cities, loadOptions);
        }
    }
}
