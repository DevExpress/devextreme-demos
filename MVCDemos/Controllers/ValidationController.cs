using DevExtreme.MVC.Demos.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class ValidationController : Controller {

        #region Overview
        [HttpGet]
        public ActionResult Overview() {
            return View(new EditorsViewModel {
                Name = "Peter"
            });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Overview(EditorsViewModel userInfo) {
            if(ModelState.IsValid) {
                return View("SuccessValidation");
            }

            return View(userInfo);
        }
        #endregion
    }
}
