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
using DevExtreme.MVC.Demos.Models;

namespace DevExtreme.MVC.Demos.Controllers {
    [Route("api/DnDBetweenGrids/{action}", Name = "DnDBetweenGrids")]
    public class DnDBetweenGridsController : ApiController {
        InMemoryRowReorderingTasksDataContext _context = new InMemoryRowReorderingTasksDataContext();

        [HttpGet]
        public HttpResponseMessage Tasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_context.Tasks.Where(task => task.Status < 3).Take(10).ToList<RowReorderingTask>(), loadOptions));
        }

        [HttpPut]
        public HttpResponseMessage UpdateTask(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var task = _context.Tasks.First(o => o.ID == key);

            JsonConvert.PopulateObject(values, task);

            Validate(task);

            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, task);
        }
    }

}
