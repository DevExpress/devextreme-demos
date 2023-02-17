using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using DevExtreme.MVC.Demos.Models.DataGrid;
using DevExtreme.MVC.Demos.Models.SampleData;

namespace DevExtreme.MVC.Demos.Controllers {
    [Route("api/RowReordering/{action}", Name = "DataGridRowReordering")]
    public class DataGridRowReorderingController : ApiController {
        InMemoryRowReorderingTasksDataContext _context = new InMemoryRowReorderingTasksDataContext();

        [HttpGet]
        public HttpResponseMessage Tasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_context.Tasks.OrderBy(t => t.OrderIndex), loadOptions));
        }

        [HttpPut]
        public HttpResponseMessage UpdateTask(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var task = _context.Tasks.First(o => o.ID == key);
            var oldOrderIndex = task.OrderIndex;

            JsonConvert.PopulateObject(values, task);
            var newOrderIndex = task.OrderIndex;

            Validate(task);

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

            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, task);
        }

        // additional actions
        [HttpGet]
        public HttpResponseMessage Employees(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.CustomEditorsEmployees, loadOptions));
        }
    }
}
