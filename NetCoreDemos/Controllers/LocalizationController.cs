using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class LocalizationController : Controller {
        #region UsingGlobalize
        public ActionResult UsingGlobalize() {
            return View(SampleData.Payments);
        }
        public ActionResult CldrData() {
            return new CldrDataScriptBuilder()
                .SetCldrPath("~/wwwroot/cldr-data")
                .UseLocales(new[] { "de", "ru" })
                .Build();
        }
        #endregion

        public ActionResult UsingIntl() {
            return View(SampleData.Payments);
        }
    }
}
