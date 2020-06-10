using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class DataGridCustomSummariesController {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Orders.Where(o => o.ID != 14 && o.ID <= 32), loadOptions);
        }
    }
}
