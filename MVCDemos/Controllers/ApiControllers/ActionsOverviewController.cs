using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class ActionsOverviewController : ApiController {

        [HttpGet]
        public object Index(DataSourceLoadOptions options) {
            return DataSourceLoader.Load(SampleData.Hotels, options);
        }
    }
}
