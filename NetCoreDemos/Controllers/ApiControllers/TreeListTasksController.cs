using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Newtonsoft.Json;
using System;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using DevExtreme.NETCore.Demos.Models.TreeList;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]/[action]")]
    public class TreeListTasksController : Controller {
        InMemoryTasksDataContext db;

        public TreeListTasksController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            db = new InMemoryTasksDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Tasks(DataSourceLoadOptions loadOptions) {
            var tasks = from d in db.Tasks
                        select new EmployeeTask {
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

            return DataSourceLoader.Load(tasks, loadOptions);
        }

        [HttpGet]
        public object TasksWithEmployees(DataSourceLoadOptions loadOptions) {
            var tasks = from d in db.Tasks
                        select new Models.TreeList.EmployeeTask {
                            Task_ID = d.Task_ID,
                            Task_Parent_ID = d.Task_Parent_ID,
                            Task_Owner_ID = d.Task_Owner_ID,
                            Task_Assigned_Employee_ID = d.Task_Assigned_Employee_ID,
                            Task_Assigned_Employee = db.Employees.Where(employee => employee.ID == d.Task_Assigned_Employee_ID).FirstOrDefault(),
                            Task_Completion = d.Task_Completion,
                            Task_Priority = d.Task_Priority,
                            Task_Status = d.Task_Status,
                            Task_Subject = d.Task_Subject,
                            Task_Start_Date = d.Task_Start_Date,
                            Task_Due_Date = d.Task_Due_Date
                        };

            return DataSourceLoader.Load(tasks, loadOptions);
        }

        [HttpGet]
        public object TaskEmployees(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(db.Employees, loadOptions);
        }

        [HttpPost]
        public IActionResult InsertTask(string values) {
            var newItem = new EmployeeTask();
            JsonConvert.PopulateObject(values, newItem);

            if(!TryValidateModel(newItem))
                return BadRequest(ModelState.GetFullErrorMessage());

            db.Tasks.Add(newItem);
            db.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateTask(int key, string values) {
            var item = db.Tasks.First(e => e.Task_ID == key);

            JsonConvert.PopulateObject(values, item);

            if(!TryValidateModel(item))
                return BadRequest(ModelState.GetFullErrorMessage());

            db.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public void DeleteTask(int key) {
            var item = db.Tasks.First(e => e.Task_ID == key);
            db.Tasks.Remove(item);
            db.SaveChanges();
        }
    }
}
