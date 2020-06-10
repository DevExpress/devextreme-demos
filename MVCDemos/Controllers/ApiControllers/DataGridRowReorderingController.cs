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

            Validate(task);

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
