using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]/[action]")]
    public class DataGridMasterDetailViewController : Controller {

        [HttpGet]
        public object Tasks(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.DataGridEmployees.Where(e => e.ID <= 9), loadOptions);
        }

        [HttpGet]
        public object TaskDetails(int id, DataSourceLoadOptions loadOptions) {
            var tasks = SampleData.DataGridEmployees.Where(e => e.ID == id).Select(e => e.Tasks).FirstOrDefault();
            return DataSourceLoader.Load(tasks, loadOptions);
        }
    }
}
