using System;
using System.Linq;
using System.Web.Mvc;
using DevExtreme.MVC.Demos.Models.DataGrid;

namespace DevExtreme.MVC.Demos.Controllers {
    public class RemoteValidationController : Controller {
        InMemoryEmployeesValidationDataContext db = new InMemoryEmployeesValidationDataContext();

        [HttpPost]
        public JsonResult CheckUniqueEmailAddress(int? id, string email) {
            bool isValid = !db.Employees.Any(emp => {
                bool isEqual = string.Equals(emp.Email, email, StringComparison.OrdinalIgnoreCase);
                return id != null ? id != emp.ID && isEqual : isEqual;
            });
            return Json(isValid);
        }

        [HttpPost]
        public JsonResult CheckEmailAddress(string email) {
            bool isValid = string.Equals(email, "test@dx-email.com", StringComparison.OrdinalIgnoreCase);
            return Json(isValid);
        }
    }
}
