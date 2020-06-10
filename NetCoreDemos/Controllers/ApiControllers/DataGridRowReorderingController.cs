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
    public class DataGridRowReorderingController : Controller {
        InMemoryTasksDataContext _context;

        public DataGridRowReorderingController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _context = new InMemoryTasksDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Tasks(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_context.Tasks.OrderBy(t => t.OrderIndex), loadOptions);
        }

        [HttpPut]
        public IActionResult UpdateTask(int key, string values) {
            var task = _context.Tasks.First(o => o.ID == key);
            var oldOrderIndex = task.OrderIndex;

            JsonConvert.PopulateObject(values, task);


            if(!TryValidateModel(task))
                return BadRequest(ModelState.GetFullErrorMessage());

            _context.Tasks.Remove(task);
            var sortedTasks = _context.Tasks.OrderBy(t => t.OrderIndex);

            if(oldOrderIndex != task.OrderIndex) {
                if(oldOrderIndex < task.OrderIndex) {
                    for(var i = oldOrderIndex; i < task.OrderIndex; i++) {

                        if(sortedTasks.ElementAt(i).OrderIndex > 0) {
                            sortedTasks.ElementAt(i).OrderIndex--;
                        }
                    }
                } else if(oldOrderIndex > task.OrderIndex) {
                    for(var i = task.OrderIndex; i < oldOrderIndex; i++) {

                        if(sortedTasks.ElementAt(i).OrderIndex < sortedTasks.Count()) {
                            sortedTasks.ElementAt(i).OrderIndex++;
                        }
                    }
                }
            }

            _context.Tasks.Add(task);

            _context.SaveChanges();

            return Ok(task);
        }
        // additional actions

        [HttpGet]
        public object Employees(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.CustomEditorsEmployees, loadOptions);
        }
    }
}
