using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class DataGridColumnsController : Controller {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(
                SampleData.Orders.Select(o => new {
                    o.OrderNumber,
                    o.SaleAmount,
                    StoreCity = o.CustomerStoreCity,
                    StoreState = o.CustomerStoreState,
                    o.Employee,
                    OrderDate = o.OrderDate.ToString("yyyy/MM/dd")
                }),
                loadOptions
            );
        }
    }
}
