using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class DataGridSalesController : ApiController {
        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.Sales, loadOptions));
        }
    }
}
