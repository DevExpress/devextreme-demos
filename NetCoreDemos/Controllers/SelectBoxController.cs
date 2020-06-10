using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class SelectBoxController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View(new SelectBoxViewModel {
                Items = SampleData.Electronics.Select(i => i.Name)
            });
        }

        [HttpGet]
        public object GetProducts(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Electronics, loadOptions);
        }
        #endregion

        // GetItems are duplicated for the demo purposes
        #region SearchAndEditing
        public ActionResult SearchAndEditing() {
            return View(new SelectBoxViewModel {
                Items = SampleData.Electronics.Select(i => i.Name)
            });
        }

        public object GetItems(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Electronics, loadOptions);
        }
        #endregion

        #region CustomizeDropDownButton
        public ActionResult CustomizeDropDownButton() {
            return View(SampleData.Electronics.Take(5));
        }

        [HttpGet]
        public object GetProductNames(DataSourceLoadOptions loadOptions) {
            var source = SampleData.Electronics.Take(5).Select(i => i.Name);
            return DataSourceLoader.Load(source, loadOptions);
        }
        #endregion

        public ActionResult GroupedItems() {
            return View();
        }
    }
}
