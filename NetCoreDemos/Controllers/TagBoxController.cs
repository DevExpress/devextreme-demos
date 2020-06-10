using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class TagBoxController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View(new TagBoxViewModel {
                Items = SampleData.Electronics.Select(i => i.Name)
            });
        }

        [HttpGet]
        public object GetProducts(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Electronics, loadOptions);
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
