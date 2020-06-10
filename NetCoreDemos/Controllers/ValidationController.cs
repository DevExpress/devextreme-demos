using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
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

        [HttpPost]
        public JsonResult CheckEmailAddress(string email) {
            bool isValid = string.Equals(email, "test@test.com", StringComparison.OrdinalIgnoreCase);
            return Json(isValid);
        }
        #endregion

    }
}
