using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class DataGridColumnsController : ApiController {
        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(
                DataSourceLoader.Load(
                    SampleData.Orders.Select(o => new {
                        o.OrderNumber,
                        o.SaleAmount,
                        StoreCity = o.CustomerStoreCity,
                        StoreState = o.CustomerStoreState,
                        o.Employee,
                        OrderDate = o.OrderDate.ToString("yyyy/MM/dd")
                    }),
                    loadOptions
                )
            );
        }
    }
}
