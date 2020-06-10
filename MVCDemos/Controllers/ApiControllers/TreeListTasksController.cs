using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.TreeList;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    [Route("api/TreeListTasks/{action}", Name = "TreeListTasks")]
    public class TreeListTasksController : ApiController {

        InMemoryTasksDataContext db = new InMemoryTasksDataContext();

        [HttpGet]
        public HttpResponseMessage Tasks(DataSourceLoadOptions loadOptions) {
            var tasks = from d in db.Tasks
                        select new Models.TreeList.EmployeeTask {
                            Task_ID = d.Task_ID,
                            Task_Parent_ID = d.Task_Parent_ID,
                            Task_Owner_ID = d.Task_Owner_ID,
                            Task_Assigned_Employee_ID = d.Task_Assigned_Employee_ID,
                            Task_Completion = d.Task_Completion,
                            Task_Priority = d.Task_Priority,
                            Task_Status = d.Task_Status,
                            Task_Subject = d.Task_Subject,
                            Task_Start_Date = d.Task_Start_Date,
                            Task_Due_Date = d.Task_Due_Date,
                            Has_Items = db.Tasks.Count(task => task.Task_Parent_ID == d.Task_ID) > 0
                        };

            return Request.CreateResponse(DataSourceLoader.Load(tasks, loadOptions));
        }


        [HttpGet]
        public HttpResponseMessage TasksWithEmployees(DataSourceLoadOptions loadOptions) {
            var tasks = from d in db.Tasks
                        select new Models.TreeList.EmployeeTask {
                            Task_ID = d.Task_ID,
                            Task_Parent_ID = d.Task_Parent_ID,
                            Task_Owner_ID = d.Task_Owner_ID,
                            Task_Assigned_Employee_ID = d.Task_Assigned_Employee_ID,
                            Task_Assigned_Employee = db.TaskEmployees.Where(employee => employee.ID == d.Task_Assigned_Employee_ID).FirstOrDefault(),
                            Task_Completion = d.Task_Completion,
                            Task_Priority = d.Task_Priority,
                            Task_Status = d.Task_Status,
                            Task_Subject = d.Task_Subject,
                            Task_Start_Date = d.Task_Start_Date,
                            Task_Due_Date = d.Task_Due_Date
                        };

            return Request.CreateResponse(DataSourceLoader.Load(tasks, loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage TaskEmployees(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(db.TaskEmployees, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage InsertTask(FormDataCollection form) {
            var values = form.Get("values");

            var newItem = new Models.TreeList.EmployeeTask();
            JsonConvert.PopulateObject(values, newItem);

            Validate(newItem);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            db.Tasks.Add(newItem);
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpPut]
        public HttpResponseMessage UpdateTask(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var employee = db.Tasks.First(e => e.Task_ID == key);

            JsonConvert.PopulateObject(values, employee);

            Validate(employee);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public void DeleteTask(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var employee = db.Tasks.First(e => e.Task_ID == key);

            db.Tasks.Remove(employee);
            db.SaveChanges();
        }
    }
}
