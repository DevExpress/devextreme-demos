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

    [Route("api/[controller]/[action]")]
    public class DataGridEmployeesByStateController : Controller {
        InMemoryEmployeesByStateDataContext _data;

        public DataGridEmployeesByStateController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _data = new InMemoryEmployeesByStateDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_data.EmployeesByState, loadOptions);
        }

        [HttpPost]
        public IActionResult Post(string values) {
            var newEmployee = new EmployeeByState();
            JsonConvert.PopulateObject(values, newEmployee);

            if(!TryValidateModel(newEmployee))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.EmployeesByState.Add(newEmployee);
            _data.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult Put(int key, string values) {
            var employee = _data.EmployeesByState.First(a => a.ID == key);
            JsonConvert.PopulateObject(values, employee);

            if(!TryValidateModel(employee))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public void Delete(int key) {
            var employee = _data.EmployeesByState.First(a => a.ID == key);
            _data.EmployeesByState.Remove(employee);
            _data.SaveChanges();
        }
    }
}
