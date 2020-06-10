using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    [Route("api/GeoNames/{action}", Name = "GeoNames")]
    public class GeoNamesController : ApiController {
        [HttpGet]
        public HttpResponseMessage Countries(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.Countries, loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage Cities(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.Cities, loadOptions));
        }
    }
}
