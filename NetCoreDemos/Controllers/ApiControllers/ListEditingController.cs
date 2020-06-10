using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]")]
    public class ListEditingController : Controller {
        InMemoryListDataContext _data;

        public ListEditingController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _data = new InMemoryListDataContext(httpContextAccessor, memoryCache);
        }


        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_data.ListItems, loadOptions);
        }

        [HttpDelete]
        public void Delete(int key) {
            var listItem = _data.ListItems.First(a => a.ID == key);
            _data.ListItems.Remove(listItem);
            _data.SaveChanges();
        }
    }
}
