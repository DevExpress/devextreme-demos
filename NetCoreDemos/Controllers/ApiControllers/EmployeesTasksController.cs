using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.Northwind;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace WidgetGallery.Controllers {
    [Route("api/[controller]")]
    public class EmployeesTasksController : Controller {
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.EmployeesTasks, loadOptions);
        }
    }
}
