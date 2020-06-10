using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    [Route("api/[controller]")]
    public class TemperatureDataController : Controller {

        [HttpGet]
        public IEnumerable<TemperatureItem> Get(string startVisible = "01/01/2017", string endVisible = "12/31/2017", string startBound = "01/01/2017", string endBound = "12/31/2017") {
            var totalList = SampleData.GetTemperatureRepository();
            var startVisibleDate = DateTime.Parse(startVisible);
            var endVisibleDate = DateTime.Parse(endVisible);
            var startBoundDate = string.IsNullOrEmpty(startBound) ? DateTime.MaxValue : DateTime.Parse(startBound);
            var endBoundDate = string.IsNullOrEmpty(endBound) ? DateTime.MinValue : DateTime.Parse(endBound);

            var startDate = startBoundDate > startVisibleDate ? startVisibleDate.AddDays(-7) : endBoundDate.AddDays(1);
            var endDate = endBoundDate < endVisibleDate ? endVisibleDate.AddDays(7) : startBoundDate.AddDays(-1);

            return totalList.Where(t => t.Date >= startDate && t.Date <= endDate);
        }

    }
}
