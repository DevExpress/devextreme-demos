using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    [Route("api/DataGridMasterDetailView/{action}", Name = "DataGridMasterDetailView")]
    public class DataGridMasterDetailViewController : ApiController {

        [HttpGet]
        public HttpResponseMessage Tasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.DataGridEmployees.Where(e => e.ID <= 9), loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage TaskDetails(int id, DataSourceLoadOptions loadOptions) {
            var tasks = SampleData.DataGridEmployees.Where(e => e.ID == id).Select(e => e.Tasks).FirstOrDefault();
            return Request.CreateResponse(DataSourceLoader.Load(tasks, loadOptions));
        }
    }
}
