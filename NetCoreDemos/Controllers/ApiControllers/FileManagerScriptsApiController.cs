using DevExtreme.AspNet.Mvc.FileManagement;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FileManagerScriptsApiController : Controller {
        IHostingEnvironment _hostingEnvironment;

        public FileManagerScriptsApiController(IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        [Route("api/file-manager-file-system", Name = "FileManagementFileSystemApi")]
        public object FileSystem(FileSystemCommand command, string arguments) {
            var config = new FileSystemConfiguration {
                Request = Request,
                FileSystemProvider = new PhysicalFileSystemProvider(_hostingEnvironment.ContentRootPath + "/wwwroot"),
                //uncomment the code below to enable file/folder management
                //AllowCopy = true,
                //AllowCreate = true,
                //AllowMove = true,
                //AllowDelete = true,
                //AllowRename = true,
                //AllowUpload = true,
                AllowDownload = true,
                AllowedFileExtensions = new[] { ".js", ".json", ".css" }
            };
            var processor = new FileSystemCommandProcessor(config);
            var result = processor.Execute(command, arguments);
            return result.GetClientCommandResult();
        }
    }
}
