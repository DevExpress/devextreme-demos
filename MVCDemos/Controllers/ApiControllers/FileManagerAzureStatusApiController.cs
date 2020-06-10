using DevExtreme.MVC.Demos.Models.FileManagement;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileManagerAzureStatusApiController : ApiController {
        [HttpGet]
        [Route("api/file-manager-azure-status", Name = "FileManagementAzureApiStatus")]
        public HttpResponseMessage Get(string widgetType) {
            AzureStorageAccount account = widgetType == "fileManager"
                ? AzureStorageAccount.FileManager.Value : AzureStorageAccount.FileUploader.Value;

            bool active = !account.IsEmpty();
            var result = new {
                active = active
            };
            return Request.CreateResponse(result);
        }
    }
}
