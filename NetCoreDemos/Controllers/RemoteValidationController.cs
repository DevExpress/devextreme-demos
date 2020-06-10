using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.DataGrid;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class RemoteValidationController : Controller {
        InMemoryEmployeesValidationDataContext _db;

        public RemoteValidationController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _db = new InMemoryEmployeesValidationDataContext(httpContextAccessor, memoryCache);
        }

        [HttpPost]
        public JsonResult CheckUniqueEmailAddress([FromBody]JObject data) {
            int? id = (int?)data["id"];
            string email = data["email"].ToString();
            bool isValid = !_db.Employees.Any(emp => {
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
