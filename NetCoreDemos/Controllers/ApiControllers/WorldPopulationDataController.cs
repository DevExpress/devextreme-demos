using System;
using System.Linq;
using System.Collections.Generic;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.AspNet.Mvc;
using DevExtreme.AspNet.Data;
using DevExtreme.NETCore.Demos.Models.SampleData;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]")]
    public class WorldPopulationDataController : Controller {
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.WorldPopulationData, loadOptions);
        }
    }
}
