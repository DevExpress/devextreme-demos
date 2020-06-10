using DevExtreme.AspNet.Data;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Newtonsoft.Json;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class DropDownBoxController : Controller {
        public ActionResult SingleSelection() {
            return View();
        }

        public ActionResult MultipleSelection() {
            return View();
        }
    }
}
