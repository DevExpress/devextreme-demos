using DevExtreme.NETCore.Demos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    public class SelectBoxEditingController : Controller {
        readonly InMemorySelectBoxDataContext _dataContext;

        public SelectBoxEditingController(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache) {
            _dataContext = new InMemorySelectBoxDataContext(contextAccessor, memoryCache);
        }

        [HttpGet]
        public object Get() {
            return _dataContext.Items;
        }

        [HttpPost]
        public object Insert(string values) {
            var newItem = new ElectronicsSimpleItem();
            JsonConvert.PopulateObject(values, newItem);

            _dataContext.Items.Add(newItem);
            _dataContext.SaveChanges();

            return newItem;
        }

    }

}
