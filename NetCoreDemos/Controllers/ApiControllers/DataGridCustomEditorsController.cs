using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System.Linq;
using System.Web.Http;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.DataGrid;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]/[action]")]
    public class DataGridCustomEditorsController : Controller {
        InMemoryTasksDataContext _context;

        public DataGridCustomEditorsController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _context = new InMemoryTasksDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Tasks(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_context.Tasks, loadOptions);
        }


        [HttpPost]
        public IActionResult InsertTask(string values) {
            var newTask = new CustomEditorsTask();
            JsonConvert.PopulateObject(values, newTask);

            if(!TryValidateModel(newTask))
                return BadRequest(ModelState.GetFullErrorMessage());

            _context.Tasks.Add(newTask);
            _context.SaveChanges();

            return Ok(newTask);
        }

        [HttpPut]
        public IActionResult UpdateTask(int key, string values) {
            var order = _context.Tasks.First(o => o.ID == key);
            JsonConvert.PopulateObject(values, order);

            if(!TryValidateModel(order))
                return BadRequest(ModelState.GetFullErrorMessage());

            _context.SaveChanges();

            return Ok(order);
        }
        // additional actions

        [HttpGet]
        public object Employees(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.CustomEditorsEmployees, loadOptions);
        }
    }
}
