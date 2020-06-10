using DevExtreme.AspNet.Mvc.FileManagement;
using DevExtreme.MVC.Demos.Models.FileManagement;
using System;
using System.Web;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileManagerDbProviderApiController : ApiController {

        [AcceptVerbs("GET", "POST")]
        [Route("api/file-manager-db", Name = "FileManagerDBProviderApi")]
        public object Process(FileSystemCommand command, string arguments) {
            var request = new HttpContextWrapper(HttpContext.Current).Request;
            var config = new FileSystemConfiguration {
                Request = request,
                FileSystemProvider = new DbFileProvider(),
                AllowCopy = true,
                AllowCreate = true,
                AllowMove = true,
                AllowDelete = true,
                AllowRename = true,
                AllowedFileExtensions = new string[0]
            };
            var processor = new FileSystemCommandProcessor(config);
            var result = processor.Execute(command, arguments);
            return Ok(result.GetClientCommandResult());
        }
    }
}
