using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using Newtonsoft.Json;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class SelectBoxController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View(new SelectBoxViewModel {
                Items = SampleData.Electronics.Select(i => i.Name)
            });
        }

        [HttpGet]
        public ActionResult GetProducts(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Electronics, loadOptions)), "application/json");
        }
        #endregion

        // GetItems is duplicated for the demo purposes
        #region SearchAndEditing
        public ActionResult SearchAndEditing() {
            return View(new SelectBoxViewModel {
                Items = SampleData.Electronics.Select(i => i.Name)
            });
        }

        public ActionResult GetItems(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Electronics, loadOptions)), "application/json");
        }
        #endregion

        #region CustomizeDropDownButton
        public ActionResult CustomizeDropDownButton() {
            return View(SampleData.Electronics.Take(5));
        }

        [HttpGet]
        public ActionResult GetProductNames(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Electronics.Take(5).Select(i => i.Name), loadOptions)), "application/json");
        }
        #endregion

        public ActionResult GroupedItems() {
            return View();
        }
    }
}
