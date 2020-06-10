using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.TreeList;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    public class TreeListEditingEmployeesController : ApiController {

        InMemoryEmployeesDataContext db = new InMemoryEmployeesDataContext();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(db.Employees, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var values = form.Get("values");

            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);

            db.Employees.Add(newEmployee);
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, newEmployee);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var employee = db.Employees.First(e => e.ID == key);

            JsonConvert.PopulateObject(values, employee);
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, employee);
        }

        [HttpDelete]
        public void Delete(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var employee = db.Employees.First(e => e.ID == key);

            db.Employees.Remove(employee);
            db.SaveChanges();
        }
    }
}
