using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Hubs;
using DevExtreme.MVC.Demos.Models;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class SchedulerSignalRController : ApiController {
        InMemoryAppointmentsDataContext _data = new InMemoryAppointmentsDataContext();
        IHubContext hubContext;

        public SchedulerSignalRController() {
            hubContext = GlobalHost.ConnectionManager.GetHubContext<SchedulerSignalRHub>();
        }

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_data.Appointments, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var values = form.Get("values");

            var newAppointment = new Appointment();
            JsonConvert.PopulateObject(values, newAppointment);

            Validate(newAppointment);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _data.Appointments.Add(newAppointment);
            _data.SaveChanges();

            var groupName = GetGroupName();
            if(groupName != null) {
                hubContext.Clients.Group(GetGroupName()).insert(newAppointment);
            }

            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var appointment = _data.Appointments.First(a => a.AppointmentId == key);

            JsonConvert.PopulateObject(values, appointment);

            Validate(appointment);
            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            _data.SaveChanges();

            var groupName = GetGroupName();
            if(groupName != null) {
                hubContext.Clients.Group(GetGroupName()).update(key, appointment);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public void Delete(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var appointment = _data.Appointments.First(a => a.AppointmentId == key);

            _data.Appointments.Remove(appointment);
            _data.SaveChanges();

            var groupName = GetGroupName();
            if(groupName != null) {
                hubContext.Clients.Group(GetGroupName()).remove(key);
            }
        }

        string GetGroupName() {
            var cookie = Request.Headers.GetCookies(SchedulerSignalRHub.GroupIdKey).FirstOrDefault();
            if(cookie != null) {
                return cookie[SchedulerSignalRHub.GroupIdKey].Value;
            }
            return null;
        }
    }
}
