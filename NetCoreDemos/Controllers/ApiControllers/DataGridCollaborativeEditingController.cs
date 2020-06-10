using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Hubs;
using DevExtreme.NETCore.Demos.Models.DataGrid;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class DataGridCollaborativeEditingController : Controller {
        static readonly Random random = new Random();
        IHubContext<DataGridCollaborativeEditingHub> hubContext;

        public DataGridCollaborativeEditingController(IHubContext<DataGridCollaborativeEditingHub> hubcontext) {
            hubContext = hubcontext;
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.DataGridEmployees, loadOptions);
        }

        [HttpPost]
        public IActionResult Post(string values, string groupId) {
            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);
            newEmployee.ID = random.Next(int.MaxValue);

            if(!TryValidateModel(newEmployee)) {
                return BadRequest(ModelState.GetFullErrorMessage());
            }

            // db.Employees.Add(newEmployee);
            // db.SaveChanges();

            hubContext.Clients.Group(groupId).SendAsync("insert", newEmployee);

            return Ok(newEmployee);
        }

        [HttpPut]
        public IActionResult Put(int key, string values, string groupId) {
            var employee = new Employee();
            JsonConvert.PopulateObject(values, employee);
            employee.ID = key;

            if(!TryValidateModel(employee)) {
                return BadRequest(ModelState.GetFullErrorMessage());
            }

            // db.SaveChanges();

            hubContext.Clients.Group(groupId).SendAsync("update", key, employee);

            return Ok(employee);
        }

        [HttpDelete]
        public void Delete(int key, string groupId) {
            // var employee = db.Employees.First(a => a.ID == key);

            // db.Employees.Remove(employee);
            // db.SaveChanges();

            hubContext.Clients.Group(groupId).SendAsync("remove", key);
        }
    }
}
