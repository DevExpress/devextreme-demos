using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class DataGridHorizontalScrollingController : ApiController {

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(GenerateData(50, 500), loadOptions));
        }

        IEnumerable<object> GenerateData(int rowCount, int columnCount) {
            for(var i = 0; i < rowCount; i++) {
                var item = new Dictionary<string, object>();
                for(var j = 0; j < columnCount; j++) {
                    item[string.Format("field{0}", j + 1)] = string.Format("{0}-{1}", i + 1, j + 1);
                }
                yield return item;
            }
        }

    }
}
