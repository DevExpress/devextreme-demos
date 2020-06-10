using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class LocalizationController : Controller {
        #region UsingGlobalize
        public ActionResult UsingGlobalize() {
            return View(SampleData.Payments);
        }
        public ActionResult CldrData() {
            return new CldrDataScriptBuilder()
                .SetCldrPath("~/Content/cldr-data")
                .UseLocales(new[] { "de", "ru" })
                .Build();
        }
        #endregion

        public ActionResult UsingIntl() {
            return View(SampleData.Payments);
        }
    }
}
