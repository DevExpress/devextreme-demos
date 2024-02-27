using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using DevExtreme.NETCore.Demos.Models.DataGrid;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class RemoteValidationController : Controller {
        InMemoryEmployeesValidationDataContext _db;

        public RemoteValidationController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _db = new InMemoryEmployeesValidationDataContext(httpContextAccessor, memoryCache);
        }

        [HttpPost]
        public JsonResult CheckUniqueEmailAddress(EmployeeValidation model) {
            var isValid = !_db.Employees.Any(emp => {
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
