using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using DevExtreme.MVC.Demos.Models;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    [Route("api/ListItemDraggingEditing/{action}", Name = "ListItemDraggingEditing")]
    public class ListItemDraggingEditingController : ApiController {
        InMemoryListPlannedDataContext _plannedTasksData = new InMemoryListPlannedDataContext();
        InMemoryListDoingDataContext _doingTasksData = new InMemoryListDoingDataContext();

        [HttpGet]
        public HttpResponseMessage GetPlannedTasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_plannedTasksData.ListItems, loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage GetDoingTasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_doingTasksData.ListItems, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage InsertPlannedTasks(FormDataCollection form) {
            var values = form.Get("values");
            var listItem = new ListTaskItem();
            JsonConvert.PopulateObject(values, listItem);

            Validate(listItem);

            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            return InsertTask(listItem, _plannedTasksData);
        }

        [HttpPost]
        public HttpResponseMessage InsertDoingTasks(FormDataCollection form) {
            var values = form.Get("values");
            var listItem = new ListTaskItem();
            JsonConvert.PopulateObject(values, listItem);

            Validate(listItem);

            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            return InsertTask(listItem, _doingTasksData);
        }

        HttpResponseMessage InsertTask(ListTaskItem listItem, InMemoryListTasksDataContext<ListTaskItem> tasksData) {
            var sortedTasks = tasksData.ListItems.OrderBy(t => t.Sort);
            for(var i = listItem.Sort; i < tasksData.ListItems.Count; i++) {
                sortedTasks.ElementAt(i).Sort++;
            }
            tasksData.ListItems.Add(listItem);

            tasksData.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.Created, listItem);
        }

        [HttpPut]
        public HttpResponseMessage UpdatePlannedTasks(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var listItem = _plannedTasksData.ListItems.First(a => a.ID == key);
            var oldOrderIndex = listItem.Sort;

            JsonConvert.PopulateObject(values, listItem);

            Validate(listItem);

            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            return UpdateTask(listItem, oldOrderIndex, _plannedTasksData);
        }

        [HttpPut]
        public HttpResponseMessage UpdateDoingTasks(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var listItem = _doingTasksData.ListItems.First(a => a.ID == key);
            var oldOrderIndex = listItem.Sort;

            JsonConvert.PopulateObject(values, listItem);

            Validate(listItem);

            if(!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

            return UpdateTask(listItem, oldOrderIndex, _doingTasksData);
        }

        HttpResponseMessage UpdateTask(ListTaskItem listItem, int oldOrderIndex, InMemoryListTasksDataContext<ListTaskItem> tasksData) {
            tasksData.ListItems.Remove(listItem);
            var sortedTasks = tasksData.ListItems.OrderBy(t => t.Sort);
            AdjustSort(listItem, oldOrderIndex, sortedTasks);
            tasksData.ListItems.Add(listItem);
            tasksData.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, listItem);
        }

        void AdjustSort(ListTaskItem listItem, int oldOrderIndex, IOrderedEnumerable<ListTaskItem> sortedTasks) {
            if(oldOrderIndex != listItem.Sort) {
                if(oldOrderIndex < listItem.Sort) {
                    for(var i = oldOrderIndex; i < listItem.Sort; i++) {

                        if(sortedTasks.ElementAt(i).Sort > 0) {
                            sortedTasks.ElementAt(i).Sort--;
                        }
                    }
                } else if(oldOrderIndex > listItem.Sort) {
                    for(var i = listItem.Sort; i < oldOrderIndex; i++) {

                        if(sortedTasks.ElementAt(i).Sort < sortedTasks.Count()) {
                            sortedTasks.ElementAt(i).Sort++;
                        }
                    }
                }
            }
        }

        [HttpDelete]
        public void DeletePlannedTasks(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            DeleteTask(key, _plannedTasksData);
        }

        [HttpDelete]
        public void DeleteDoingTasks(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            DeleteTask(key, _doingTasksData);
        }

        private void DeleteTask(int key, InMemoryListTasksDataContext<ListTaskItem> tasksData) {
            var listItem = tasksData.ListItems.First(a => a.ID == key);
            tasksData.ListItems.Remove(listItem);

            var sortedTasks = tasksData.ListItems.OrderBy(t => t.Sort);
            for(var i = listItem.Sort; i < tasksData.ListItems.Count; i++) {
                sortedTasks.ElementAt(i).Sort--;
            }

            tasksData.SaveChanges();
        }
    }
}
