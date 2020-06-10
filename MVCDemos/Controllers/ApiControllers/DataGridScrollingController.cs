using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class DataGridScrollingController : ApiController {

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(GenerateData(100000), loadOptions));
        }

        IEnumerable<User> GenerateData(int count) {
            var surnames = new[] { "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Harris", "Clark", "Allen", "Scott", "Carter" };
            var names = new[] { "James", "John", "Robert", "Christopher", "George", "Mary", "Nancy", "Sandra", "Michelle", "Betty" };
            var gender = new[] { "Male", "Female" };
            var startBirthDate = DateTime.Parse("1/1/1975");
            var endBirthDate = DateTime.Parse("1/1/1992");
            double s = 123456789;

            Func<double> random = () => {
                s = (1103515245 * s + 12345) % 2147483647;
                return s % (names.Length - 1);
            };

            for(var i = 0; i < count; i++) {
                var birthDate = new DateTime(startBirthDate.Ticks + Convert.ToInt64(Math.Floor(random() * (endBirthDate.Ticks - startBirthDate.Ticks) / 10)));

                birthDate.AddHours(12);

                var nameIndex = Convert.ToInt32(random());
                yield return new User {
                    Id = i + 1,
                    FirstName = names[nameIndex],
                    LastName = surnames[Convert.ToInt32(random())],
                    Gender = gender[Convert.ToInt32(Math.Floor(Convert.ToDouble(nameIndex / 5)))],
                    BirthDate = birthDate
                };
            }
        }

    }
}
