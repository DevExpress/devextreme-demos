using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using Newtonsoft.Json;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class TagBoxController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View(new TagBoxViewModel {
                Items = SampleData.Electronics.Select(i => i.Name)
            });
        }

        [HttpGet]
        public ActionResult GetProducts(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Electronics, loadOptions)), "application/json");
        }
        #endregion

        public ActionResult GroupedItems() {
            return View(SampleData.Electronics);
        }

        public ActionResult TagCountLimitation() {
            return View(SampleData.Electronics);
        }
    }
}
