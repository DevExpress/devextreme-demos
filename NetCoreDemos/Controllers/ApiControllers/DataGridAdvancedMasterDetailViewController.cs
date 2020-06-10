using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.Northwind;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]/[action]")]
    public class DataGridAdvancedMasterDetailViewController : Controller {
        NorthwindContext _nwinds;

        public DataGridAdvancedMasterDetailViewController(NorthwindContext nwinds) {
            _nwinds = nwinds;
        }

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
