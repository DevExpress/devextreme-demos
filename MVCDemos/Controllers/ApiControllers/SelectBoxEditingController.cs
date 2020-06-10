using DevExtreme.MVC.Demos.Models;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {

    public class SelectBoxEditingController : ApiController {
        readonly InMemorySelectBoxDataContext _dataContext = new InMemorySelectBoxDataContext();

        [HttpGet]
        public HttpResponseMessage Get() {
            return Request.CreateResponse(_dataContext.Items);
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var values = form.Get("values");

            var newItem = new ElectronicsSimpleItem();
            JsonConvert.PopulateObject(values, newItem);

            _dataContext.Items.Add(newItem);
            _dataContext.SaveChanges();

            return Request.CreateResponse(newItem);
        }
    }

}
