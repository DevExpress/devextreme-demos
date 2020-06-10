using DevExtreme.AspNet.Mvc.FileManagement;
using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileManagerImagesApiController : ApiController {
        static readonly string SampleImagesRelativePath = Path.Combine("Content", "SampleData", "SampleImages");

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.Route("api/file-manager-file-system-images", Name = "FileManagementImagesApi")]
        public object FileSystem() {
            var request = new HttpContextWrapper(HttpContext.Current).Request;
            FileSystemCommand command;
            Enum.TryParse(request["command"], out command);
            string arguments = request["arguments"];
            var config = new FileSystemConfiguration {
                Request = request,
                FileSystemProvider = new PhysicalFileSystemProvider(
                    Path.Combine(HostingEnvironment.ApplicationPhysicalPath, SampleImagesRelativePath),
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
                AllowDownload = true,
                TempDirectory = HttpContext.Current.Server.MapPath("~/App_Data/UploadTemp")
            };
            var processor = new FileSystemCommandProcessor(config);
            var commandResult = processor.Execute(command, arguments);
            var result = commandResult.GetClientCommandResult();
            return command == FileSystemCommand.Download && commandResult.Success ? CreateDownloadResponse(result) : Request.CreateResponse(result);
        }

        string GetFileItemUrl(FileSystemInfo fileSystemItem) {
            var relativeUrl = "~/" + fileSystemItem.FullName
                .Replace(HostingEnvironment.ApplicationPhysicalPath, "")
                .Replace(Path.DirectorySeparatorChar, '/');
            return Url.Content(relativeUrl);
        }

        HttpResponseMessage CreateDownloadResponse(object result) {
            var fileContent = result as FileStreamResult;
            if(fileContent == null)
                return Request.CreateResponse(result);

            var response = new HttpResponseMessage() {
                Content = new StreamContent(fileContent.FileStream)
            };
            response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment") {
                FileName = fileContent.FileDownloadName
            };
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            return response;
        }

    }
}
