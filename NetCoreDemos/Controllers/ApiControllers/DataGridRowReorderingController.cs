using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System.Linq;
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
            var newOrderIndex = task.OrderIndex;

            if(!TryValidateModel(task))
                return BadRequest(ModelState.GetFullErrorMessage());

            if(oldOrderIndex != newOrderIndex) {
                task.OrderIndex = oldOrderIndex;
                var sortedTasks = _context.Tasks.OrderBy(t => t.OrderIndex).ToList();

                if(oldOrderIndex < newOrderIndex) {
                    for(var i = oldOrderIndex + 1; i <= newOrderIndex; i++) {
                        sortedTasks[i].OrderIndex--;
                    };
                } else {
                    for(var i = newOrderIndex; i < oldOrderIndex; i++) {
                        sortedTasks[i].OrderIndex++;
                    };
                }
                task.OrderIndex = newOrderIndex;
            }

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
