using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using System.Linq;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TemperatureDataController : ApiController {

        [HttpGet]
        public IEnumerable<TemperatureItem> Get(string startVisible = "01/01/2017", string endVisible = "12/31/2017", string startBound = "01/01/2017", string endBound = "12/31/2017") {
            var startVisibleDate = DateTime.Parse(startVisible);
            var endVisibleDate = DateTime.Parse(endVisible);

            var startBoundDate = string.IsNullOrEmpty(startBound) ? DateTime.MaxValue : DateTime.Parse(startBound);
            var endBoundDate = string.IsNullOrEmpty(endBound) ? DateTime.MinValue : DateTime.Parse(endBound);

            var startDate = startBoundDate > startVisibleDate ? startVisibleDate.AddDays(-7) : endBoundDate.AddDays(1);
            var endDate = endBoundDate < endVisibleDate ? endVisibleDate.AddDays(7) : startBoundDate.AddDays(-1);

            return SampleData.ServiceRepository.Instance.TemperatureItems.Where(t => t.Date >= startDate && t.Date <= endDate);
        }

    }
}
