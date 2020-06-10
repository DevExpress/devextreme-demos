using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ListController : Controller {
        public ActionResult WebApi() {
            return View();
        }

        public ActionResult ListEditingAndAPI() {
            return View();
        }

        public ActionResult GroupedList() {
            return View(SampleData.ListGroupedData);
        }

        public ActionResult ItemTemplate() {
            return View(SampleData.ListProducts);
        }

        public ActionResult ListWithSearchBar() {
            return View(SampleData.ListProducts);
        }

        public ActionResult ListSelection() {
            return View(SampleData.ListPlainData.Take(50));
        }

        public ActionResult ItemDragging() {
            return View();
        }
    }
}
