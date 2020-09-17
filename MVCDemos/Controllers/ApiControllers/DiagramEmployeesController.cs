using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.Diagram;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    [Route("api/DiagramEmployees/{action}", Name = "DiagramEmployees")]
    public class DiagramEmployeesController : ApiController {

        InMemoryEmployeesDataContext db = new InMemoryEmployeesDataContext();

        [HttpGet]
        public HttpResponseMessage Employees(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(db.Employees, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage InsertEmployee(FormDataCollection form) {
            var values = form.Get("values");

            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);

            Validate(newEmployee);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            db.Employees.Add(newEmployee);
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, newEmployee);
        }

        [HttpPut]
        public HttpResponseMessage UpdateEmployee(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var employee = db.Employees.First(e => e.ID == key);

            JsonConvert.PopulateObject(values, employee);

            Validate(employee);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, employee);
        }

        [HttpDelete]
        public void DeleteEmployee(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var employee = db.Employees.First(e => e.ID == key);

            db.Employees.Remove(employee);
            db.SaveChanges();
        }
    }
}
