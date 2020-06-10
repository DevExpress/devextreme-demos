using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]/[action]")]
    public class ListItemDraggingEditingController : Controller {
        InMemoryListPlannedDataContext _plannedTasksData;
        InMemoryListDoingDataContext _doingTasksData;

        public ListItemDraggingEditingController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _plannedTasksData = new InMemoryListPlannedDataContext(httpContextAccessor, memoryCache);
            _doingTasksData = new InMemoryListDoingDataContext(httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object GetPlannedTasks(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_plannedTasksData.ListItems, loadOptions);
        }

        [HttpGet]
        public object GetDoingTasks(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_doingTasksData.ListItems, loadOptions);
        }

        [HttpPost]
        public IActionResult InsertPlannedTasks(string values) {
            var listItem = new ListTaskItem();
            JsonConvert.PopulateObject(values, listItem);

            if(!TryValidateModel(listItem))
                return BadRequest(ModelState.GetFullErrorMessage());

            return InsertTask(listItem, _plannedTasksData);
        }

        [HttpPost]
        public IActionResult InsertDoingTasks(string values) {
            var listItem = new ListTaskItem();
            JsonConvert.PopulateObject(values, listItem);

            if(!TryValidateModel(listItem))
                return BadRequest(ModelState.GetFullErrorMessage());

            return InsertTask(listItem, _doingTasksData);
        }

        IActionResult InsertTask(ListTaskItem listItem, InMemoryListTasksDataContext<ListTaskItem> tasksData) {
            var sortedTasks = tasksData.ListItems.OrderBy(t => t.Sort);
            for(var i = listItem.Sort; i < tasksData.ListItems.Count; i++) {
                sortedTasks.ElementAt(i).Sort++;
            }
            tasksData.ListItems.Add(listItem);

            tasksData.SaveChanges();
            return Ok(listItem);
        }

        [HttpPut]
        public IActionResult UpdatePlannedTasks(int key, string values) {
            var listItem = _plannedTasksData.ListItems.First(a => a.ID == key);
            var oldOrderIndex = listItem.Sort;

            JsonConvert.PopulateObject(values, listItem);

            if(!TryValidateModel(listItem))
                return BadRequest(ModelState.GetFullErrorMessage());

            return UpdateTask(listItem, oldOrderIndex, _plannedTasksData);
        }

        [HttpPut]
        public IActionResult UpdateDoingTasks(int key, string values) {
            var listItem = _doingTasksData.ListItems.First(a => a.ID == key);
            var oldOrderIndex = listItem.Sort;

            JsonConvert.PopulateObject(values, listItem);

            if(!TryValidateModel(listItem))
                return BadRequest(ModelState.GetFullErrorMessage());

            return UpdateTask(listItem, oldOrderIndex, _doingTasksData);
        }

        IActionResult UpdateTask(ListTaskItem listItem, int oldOrderIndex, InMemoryListTasksDataContext<ListTaskItem> tasksData) {
            tasksData.ListItems.Remove(listItem);
            var sortedTasks = tasksData.ListItems.OrderBy(t => t.Sort);
            AdjustSort(listItem, oldOrderIndex, sortedTasks);
            tasksData.ListItems.Add(listItem);
            tasksData.SaveChanges();
            return Ok(listItem);
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
        public void DeletePlannedTasks(int key) {
            DeleteTask(key, _plannedTasksData);
        }

        [HttpDelete]
        public void DeleteDoingTasks(int key) {
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
