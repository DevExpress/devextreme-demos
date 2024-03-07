using System;
using System.Linq;
using System.Web.Mvc;
using DevExtreme.MVC.Demos.Models.DataGrid;

namespace DevExtreme.MVC.Demos.Controllers {
    public class RemoteValidationController : Controller {
        InMemoryEmployeesValidationDataContext db = new InMemoryEmployeesValidationDataContext();

        [HttpPost]
        public JsonResult CheckUniqueEmailAddress(EmployeeValidation model) {
            var isValid = !db.Employees.Any(emp => {
                var equals = string.Equals(emp.Email, model.Email, StringComparison.OrdinalIgnoreCase);
                return model.ID != emp.ID && equals;
            });
            return Json(isValid);
        }

        [HttpPost]
        public JsonResult CheckEmailAddress(string email) {
            var isValid = !string.Equals(email, "test@dx-email.com", StringComparison.OrdinalIgnoreCase);
            return Json(isValid);
        }
    }
}
