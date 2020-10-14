using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DevExtreme.MVC.Demos.Models.Northwind;
using DevExtreme.MVC.Demos.Models.DataGrid;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Controllers {
    [Route("api/DataGridBatchUpdateWebApi/{action}", Name = "DataGridBatchUpdateWebApi")]
    public class DataGridBatchUpdateWebApiController : ApiController {
        InMemoryNorthwindContext _nwind = new InMemoryNorthwindContext();

        [HttpGet]
        public HttpResponseMessage Orders(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(_nwind.Orders, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Batch(List<DataChange> changes) {
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

                    Validate(order);
                    if(!ModelState.IsValid)
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.GetFullErrorMessage());

                    if(change.Type == "insert") {
                        _nwind.Orders.Add(order);
                    }
                    change.Data = order;
                } else if(change.Type == "remove") {
                    _nwind.Orders.Remove(order);
                }
            }

            _nwind.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, changes);
        }
    }

}
