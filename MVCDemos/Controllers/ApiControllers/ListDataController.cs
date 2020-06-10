using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using DevExtreme.MVC.Demos.Models.Northwind;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class ListDataController : ApiController {
        NorthwindContext _nwind = new NorthwindContext();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(
                DataSourceLoader.Load(_nwind.Products.Include("Category"), loadOptions)
            );
        }

    }
}
