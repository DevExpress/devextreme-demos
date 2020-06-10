using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using Newtonsoft.Json;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class DropDownBoxController : Controller {
        public ActionResult SingleSelection() {
            return View();
        }

        public ActionResult MultipleSelection() {
            return View();
        }
    }
}
