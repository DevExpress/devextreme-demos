using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class RangeSelectorController : Controller {
        public ActionResult NumericScaleLightweight() {
            return View();
        }
        public ActionResult NumericScale() {
            return View(SampleData.NumericScaleProducts);
        }
        public ActionResult DateTimeScaleLightweight() {
            return View();
        }
        public ActionResult DateTimeScale() {
            return View(SampleData.DateTimeScaleTemperatures);
        }
        public ActionResult LogarithmicScale() {
            return View();
        }
        public ActionResult DiscreteScale() {
            return View(SampleData.CopperProductionData);
        }
        public ActionResult CustomFormatting() {
            return View();
        }
        public ActionResult UseRangeSelectionForCalculation() {
            return View();
        }
        public ActionResult UseRangeSelectionForFiltering() {
            return View(SampleData.SelectedEmployees);
        }
        public ActionResult ImageOnBackground() {
            return View();
        }
        public ActionResult ChartOnBackground() {
            return View(SampleData.CostsAndRevenues);
        }
        public ActionResult CustomizedChartOnBackground() {
            return View(SampleData.CpuPoints);
        }
        public ActionResult ChartOnBackgroundWithSeriesTemplate() {
            return View(SampleData.OilProductionData.Where(e => new[] { "USA", "Saudi Arabia", "Mexico" }.Contains(e.Country)));
        }
    }
}
