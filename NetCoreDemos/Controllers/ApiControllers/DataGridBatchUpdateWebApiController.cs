using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.DataGrid;
using DevExtreme.NETCore.Demos.Models.Northwind;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]/[action]")]
    public class DataGridBatchUpdateWebApiController : Controller {
        InMemoryNorthwindContext _nwind;

        public DataGridBatchUpdateWebApiController(NorthwindContext nwind, IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _nwind = new InMemoryNorthwindContext(nwind, httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Orders(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_nwind.Orders, loadOptions);
        }

        [HttpPost]
        public object Batch([FromBody] List<DataChange> changes) {
            foreach(var change in changes) {
                Order order;

                if(change.Type == "update" || change.Type == "remove") {
                    var key = Convert.ToInt32(change.Key);
                    order = _nwind.Orders.First(o => o.OrderID == key);
                } else {
                    order = new Order();
                }

                if(change.Type == "insert" || change.Type == "update") {
                    JsonConvert.PopulateObject(change.Data.ToString(), order);

                    if(!TryValidateModel(order))
                        return BadRequest(ModelState.GetFullErrorMessage());

                    if(change.Type == "insert") {
                        _nwind.Orders.Add(order);
                    }
                    change.Data = order;
                } else if(change.Type == "remove") {
                    _nwind.Orders.Remove(order);
                }
            }

            _nwind.SaveChanges();

            return Ok(changes);
        }
    }

}
