using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Hubs;
using DevExtreme.MVC.Demos.Models.DataGrid;
using DevExtreme.MVC.Demos.Models.SampleData;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class DataGridCollaborativeEditingController : ApiController {
        static readonly Random random = new Random();
        IHubContext hubContext;

        public DataGridCollaborativeEditingController() {
            hubContext = GlobalHost.ConnectionManager.GetHubContext<DataGridCollaborativeEditingHub>();
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.DataGridEmployees, loadOptions);
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var values = form.Get("values");
            var groupId = form.Get("groupId");

            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);
            newEmployee.ID = random.Next(int.MaxValue);

            Validate(newEmployee);
            if(!ModelState.IsValid) {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());
            }

            // db.Employees.Add(newEmployee);
            // db.SaveChanges();

            hubContext.Clients.Group(groupId).insert(newEmployee);

            return Request.CreateResponse(newEmployee);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var groupId = form.Get("groupId");

            var employee = new Employee();
            JsonConvert.PopulateObject(values, employee);
            employee.ID = key;

            Validate(employee);
            if(!ModelState.IsValid) {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());
            }

            // db.SaveChanges();

            hubContext.Clients.Group(groupId).update(key, employee);

            return Request.CreateResponse(employee);
        }

        [HttpDelete]
        public void Delete(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var groupId = form.Get("groupId");

            // var employee = db.Employees.First(a => a.ID == key);

            // db.Employees.Remove(employee);
            // db.SaveChanges();

            hubContext.Clients.Group(groupId).remove(key);
        }
    }
}
