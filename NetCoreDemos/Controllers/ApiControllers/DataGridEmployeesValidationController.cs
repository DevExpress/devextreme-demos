using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.DataGrid;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using DevExtreme.AspNet.Mvc;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class DataGridEmployeesValidationController : Controller {
        InMemoryEmployeesValidationDataContext _data;

        public DataGridEmployeesValidationController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _data = new InMemoryEmployeesValidationDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_data.Employees, loadOptions);
        }

        [HttpPost]
        public IActionResult Post(string values) {
            var newEmployee = new EmployeeValidation();
            JsonConvert.PopulateObject(values, newEmployee);

            if(!TryValidateModel(newEmployee))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.Employees.Add(newEmployee);
            _data.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult Put(int key, string values) {
            var employee = _data.Employees.First(a => a.ID == key);
            JsonConvert.PopulateObject(values, employee);

            if(!TryValidateModel(employee))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public void Delete(int key) {
            var employee = _data.Employees.First(a => a.ID == key);
            _data.Employees.Remove(employee);
            _data.SaveChanges();
        }
    }
}
