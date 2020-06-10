using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.AspNet.Mvc;
using DevExtreme.AspNet.Data;
using DevExtreme.NETCore.Demos.Models.SampleData;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Produces("application/json")]
    [Route("api/ActionsOverview")]
    public class ActionsOverviewController : Controller {
        [HttpGet]
        public object Get(DataSourceLoadOptions options) {
            return DataSourceLoader.Load(SampleData.Hotels, options);
        }
    }
}
