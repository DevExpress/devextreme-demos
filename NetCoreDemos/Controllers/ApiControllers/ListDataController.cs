using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.Northwind;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]")]
    public class ListDataController : Controller {
        NorthwindContext _nwind;

        public ListDataController(NorthwindContext nwind) {
            _nwind = nwind;
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(_nwind.Products.Include(p => p.Category), loadOptions);
        }

    }
}
