using System;
using System.Linq;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Hubs;
using DevExtreme.NETCore.Demos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class SchedulerSignalRController : Controller {
        InMemoryAppointmentsDataContext _data;
        private static readonly Random random = new Random();
        private IHubContext<SchedulerSignalRHub> hubContext;

        public SchedulerSignalRController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache, IHubContext<SchedulerSignalRHub> hubcontext) {
            _data = new InMemoryAppointmentsDataContext(httpContextAccessor, memoryCache);
            hubContext = hubcontext;
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

            var groupName = GetGroupName();
            if(groupName != null) {
                hubContext.Clients.Group(GetGroupName()).SendAsync("insert", newAppointment);
            }

            return Ok();
        }

        [HttpPut]
        public IActionResult Put(int key, string values) {
            var appointment = _data.Appointments.First(a => a.AppointmentId == key);
            JsonConvert.PopulateObject(values, appointment);

            if(!TryValidateModel(appointment))
                return BadRequest(ModelState.GetFullErrorMessage());

            _data.SaveChanges();

            var groupName = GetGroupName();
            if(groupName != null) {
                hubContext.Clients.Group(GetGroupName()).SendAsync("update", key, appointment);
            }

            return Ok();
        }

        [HttpDelete]
        public void Delete(int key) {
            var appointment = _data.Appointments.First(a => a.AppointmentId == key);
            _data.Appointments.Remove(appointment);
            _data.SaveChanges();

            var groupName = GetGroupName();
            if(groupName != null) {
                hubContext.Clients.Group(GetGroupName()).SendAsync("remove", key);
            }
        }

        string GetGroupName() {
            HttpContext.Request.Cookies.TryGetValue(SchedulerSignalRHub.GroupIdKey, out var cookie);
            return cookie;
        }
    }
}
