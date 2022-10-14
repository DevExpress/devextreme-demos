using DevExtreme.AspNet.Mvc.FileManagement;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FileManagerImagesApiController : Controller {
        static readonly string SampleImagesRelativePath = Path.Combine("SampleData", "SampleImages");

        public FileManagerImagesApiController(IWebHostEnvironment webHostEnvironment) {
            WebHostEnvironment = webHostEnvironment;
        }
        public IWebHostEnvironment WebHostEnvironment { get; }

        [Route("api/file-manager-file-system-images", Name = "FileManagementImagesApi")]
        public object FileSystem(FileSystemCommand command, string arguments) {
            var config = new FileSystemConfiguration {
                Request = Request,
                FileSystemProvider = new PhysicalFileSystemProvider(
                    Path.Combine(WebHostEnvironment.WebRootPath, SampleImagesRelativePath),
                    (fileSystemItem, clientItem) => {
                        if(!clientItem.IsDirectory)
                            clientItem.CustomFields["url"] = GetFileItemUrl(fileSystemItem);
                    }
                ),
                //uncomment the code below to enable file/directory management
                //AllowCopy = true,
                //AllowCreate = true,
                //AllowMove = true,
                //AllowDelete = true,
                //AllowRename = true,
                //AllowUpload = true,
                AllowDownload = true
            };
            var processor = new FileSystemCommandProcessor(config);
            var result = processor.Execute(command, arguments);
            return result.GetClientCommandResult();
        }

        string GetFileItemUrl(FileSystemInfo fileSystemItem) {
            var relativeUrl = fileSystemItem.FullName
                .Replace(WebHostEnvironment.WebRootPath, "")
                .Replace(Path.DirectorySeparatorChar, '/');
            return $"{Request.Scheme}://{Request.Host}{Request.PathBase}{relativeUrl}";
        }
    }
}
