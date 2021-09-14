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
    public class DataGridWebApiController : Controller {
        InMemoryNorthwindContext _nwind;

        public DataGridWebApiController(NorthwindContext nwind, IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _nwind = new InMemoryNorthwindContext(nwind, httpContextAccessor, memoryCache);
        }

        [HttpGet]
        public object Orders(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_nwind.Orders, loadOptions);
        }

        [HttpPost]
        public IActionResult InsertOrder(string values) {
            var newOrder = new Order();
            JsonConvert.PopulateObject(values, newOrder);

            if(!TryValidateModel(newOrder))
                return BadRequest(ModelState.GetFullErrorMessage());

            _nwind.Orders.Add(newOrder);
            _nwind.SaveChanges();

            return Ok(newOrder);
        }

        [HttpPut]
        public IActionResult UpdateOrder(int key, string values) {
            var order = _nwind.Orders.First(o => o.OrderID == key);
            JsonConvert.PopulateObject(values, order);

            if(!TryValidateModel(order))
                return BadRequest(ModelState.GetFullErrorMessage());

            _nwind.SaveChanges();

            return Ok(order);
        }

        [HttpDelete]
        public void DeleteOrder(int key) {
            var order = _nwind.Orders.First(o => o.OrderID == key);
            _nwind.Orders.Remove(order);
            _nwind.SaveChanges();
        }

        // additional actions

        [HttpGet]
        public object OrderDetails(int orderID, DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(
                from i in _nwind.Order_Details
                where i.OrderID == orderID
                select new {
                    Product = i.Product.ProductName,
                    Price = i.UnitPrice,
                    i.Quantity,
                    Sum = i.UnitPrice * i.Quantity
                },
                loadOptions
            );
        }

        [HttpGet]
        public object ShippersLookup(DataSourceLoadOptions loadOptions) {
            var lookup = from i in _nwind.Shippers
                         orderby i.CompanyName
                         select new {
                             Value = i.ShipperID,
                             Text = i.CompanyName
                         };

            return DataSourceLoader.Load(lookup, loadOptions);
        }

        [HttpGet]
        public object CustomersLookup(DataSourceLoadOptions loadOptions) {
            var lookup = from i in _nwind.Customers
                         let text = i.CompanyName + " (" + i.Country + ")"
                         orderby i.CompanyName
                         select new {
                             Value = i.CustomerID,
                             Text = text
                         };

            return DataSourceLoader.Load(lookup, loadOptions);
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
