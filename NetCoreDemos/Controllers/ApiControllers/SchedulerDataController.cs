using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using DevExtreme.AspNet.Mvc;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]")]
    public class SchedulerDataController : Controller {
        InMemoryAppointmentsDataContext _data;

        public SchedulerDataController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _data = new InMemoryAppointmentsDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_data.Appointments, loadOptions);
        }

        [HttpPost]
        public IActionResult Post(string values) {
            var newAppointment = new AppointmentTest();
            JsonConvert.PopulateObject(values, newAppointment);

            if(!TryValidateModel(newAppointment))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.Appointments.Add(newAppointment);
            _data.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public IActionResult Put(int key, string values) {
            var appointment = _data.Appointments.First(a => a.AppointmentId == key);
            JsonConvert.PopulateObject(values, appointment);

            if(!TryValidateModel(appointment))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public void Delete(int key) {
            var appointment = _data.Appointments.First(a => a.AppointmentId == key);
            _data.Appointments.Remove(appointment);
            _data.SaveChanges();
        }
    }
}
