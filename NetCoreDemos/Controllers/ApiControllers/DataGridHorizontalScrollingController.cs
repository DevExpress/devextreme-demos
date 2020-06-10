using System.Collections.Generic;
using System.Dynamic;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class DataGridHorizontalScrollingController : Controller {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(GenerateData(50, 500), loadOptions);
        }

        IEnumerable<object> GenerateData(int rowCount, int columnCount) {
            for(var i = 0; i < rowCount; i++) {
                var item = new ExpandoObject() as IDictionary<string, object>;
                for(var j = 0; j < columnCount; j++) {
                    item[string.Format("field{0}", j + 1)] = string.Format("{0}-{1}", i + 1, j + 1);
                }
                yield return item;
            }
        }
    }
}
