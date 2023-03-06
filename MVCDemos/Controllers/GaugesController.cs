using DevExtreme.MVC.Demos.Models.SampleData;
using System.Collections.Generic;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class GaugesController : Controller {
        public ActionResult UpdateCircularGaugeDataAtRuntime() {
            return View(SampleData.GaugeSeasonsData);
        }

        public ActionResult UpdateLinearGaugeDataAtRuntime() {
            return View(SampleData.GaugeCitiesData);
        }

        public ActionResult UpdateBarGaugeDataAtRuntime() {
            return View(SampleData.Colors);
        }

        public ActionResult PaletteForRanges() {
            return View();
        }

        public ActionResult ScaleMinorTicks() {
            return View();
        }

        public ActionResult ScaleLabelFormatting() {
            return View();
        }

        public ActionResult DifferentValueIndicatorTypes() {
            return View();
        }

        public ActionResult DifferentSubvalueIndicatorTypes() {
            return View();
        }

        public ActionResult Overview() {
            return View();
        }

        public ActionResult SubvalueIndicatorTextFormatting() {
            return View();
        }

        public ActionResult CustomLayout() {
            return View();
        }

        public ActionResult AnglesCustomization() {
            return View();
        }

        public ActionResult GaugeTitleCustomized() {
            return View();
        }

        public ActionResult GaugeTooltip() {
            return View();
        }

        public ActionResult ValueIndicatorsAPI() {
            return View();
        }

        public ActionResult LabelsCustomization() {
            return View();
        }

        public ActionResult Palette() {
            return View();
        }

        public ActionResult Tooltip() {
            return View();
        }

        public ActionResult ScaleCustomTickInterval() {
            return View();
        }

        public ActionResult ScaleCustomTickValues() {
            return View();
        }

        public ActionResult DifferentValueIndicatorTypesLinearGauge() {
            return View();
        }

        public ActionResult DifferentSubvalueIndicatorTypesLinearGauge() {
            return View();
        }

        public ActionResult BaseValueForRangeBar() {
            return View();
        }

        public ActionResult CustomLayoutLinearGauge() {
            return View();
        }

        public ActionResult VariableNumberOfSubvalueIndicators() {
            return View(SampleData.SubvalueIndicators);
        }

        public ActionResult VariableNumberOfBars() {
            return View(SampleData.GaugeProducts);
        }
    }
}
