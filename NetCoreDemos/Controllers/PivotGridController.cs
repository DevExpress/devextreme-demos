using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
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
