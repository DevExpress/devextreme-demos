using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class PivotGridController : Controller {
        public ActionResult SimpleArray() {
            return View();
        }
        public ActionResult OLAPDataSource() {
            return View();
        }
        public ActionResult StandaloneFieldChooser() {
            return View(SampleData.GetLayouts());
        }
        public ActionResult IntegratedFieldChooser() {
            return View();
        }
        public ActionResult FieldPanel() {
            return View();
        }
        public ActionResult RunningTotals() {
            return View();
        }
        public ActionResult SummaryDisplayModes() {
            return View();
        }
        public ActionResult DrillDown() {
            return View();
        }
        public ActionResult VirtualScrolling() {
            return View();
        }
        public ActionResult StatePersistence() {
            return View();
        }
        public ActionResult ChartIntegration() {
            return View();
        }
        public ActionResult Overview() {
            return View();
        }
        public ActionResult LayoutCustomization() {
            return View();
        }
        public ActionResult RemoteVirtualScrolling() {
            return View();
        }
        public ActionResult HeaderFilter() {
            return View();
        }
        public ActionResult WebAPIService() {
            return View();
        }
    }
}
