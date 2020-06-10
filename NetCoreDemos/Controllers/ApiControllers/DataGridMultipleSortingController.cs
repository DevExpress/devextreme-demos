using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class DataGridMultipleSortingController : Controller {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.DataGridEmployees.Where(e => e.ID <= 10), loadOptions);
        }
    }
}
