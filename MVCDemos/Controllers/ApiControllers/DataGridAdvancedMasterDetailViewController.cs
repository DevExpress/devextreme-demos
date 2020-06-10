using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.Northwind;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class DataGridAdvancedMasterDetailViewController : ApiController {
        NorthwindContext _nwinds = new NorthwindContext();

        [HttpGet]
        public object GetSuppliers(DataSourceLoadOptions options) {
            return DataSourceLoader.Load(_nwinds.Suppliers, options);
        }

        [HttpGet]
        public object GetProductsBySupplier(int supplierID, DataSourceLoadOptions options) {
            return DataSourceLoader.Load(_nwinds.Products.Where(p => p.SupplierID == supplierID), options);
        }

        [HttpGet]
        public object GetOrdersByProduct(int productID, DataSourceLoadOptions options) {
            var query = from i in _nwinds.Order_Details
                        where i.ProductID == productID
                        join j in _nwinds.Orders on i.OrderID equals j.OrderID
                        select new {
                            i.OrderID,
                            j.OrderDate,
                            j.ShipCountry,
                            j.ShipCity,
                            i.UnitPrice,
                            i.Quantity,
                            i.Discount
                        };

            return DataSourceLoader.Load(query, options);
        }
    }
}
