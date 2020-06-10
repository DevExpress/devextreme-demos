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
using DevExtreme.MVC.Demos.Models;

namespace DevExtreme.MVC.Demos.Controllers {
    [Route("api/CustomEditors/{action}", Name = "DataGridCustomEditors")]
    public class DataGridCustomEditorsController : ApiController {
        InMemoryTasksDataContext _context = new InMemoryTasksDataContext();

        [HttpGet]
        public HttpResponseMessage Tasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_context.Tasks, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage InsertTask(FormDataCollection form) {
            var values = form.Get("values");

            var newTask = new CustomEditorsTask();
            JsonConvert.PopulateObject(values, newTask);

            Validate(newTask);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _context.Tasks.Add(newTask);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, newTask);
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
        // additional actions

        [HttpGet]
        public HttpResponseMessage Employees(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.CustomEditorsEmployees, loadOptions));
        }
    }

}
