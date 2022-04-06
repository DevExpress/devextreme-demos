﻿using DevExtreme.AspNet.Mvc.FileManagement;
using DevExtreme.MVC.Demos.Models.FileManagement;
using System;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Net.Http.Headers;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileManagerAzureProviderApiController : ApiController {
        HttpContext CurrentContext = HttpContext.Current;

        string TempDirectoryPath {
            get { return CurrentContext.Server.MapPath("~/App_Data/UploadTemp"); }
        }

        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.Route("api/file-manager-azure", Name = "FileManagementAzureApi")]
        public HttpResponseMessage Process() {
            FileSystemCommand command;
            Enum.TryParse(CurrentContext.Request["command"], out command);
            string arguments = CurrentContext.Request["arguments"];

            AzureStorageAccount account = AzureStorageAccount.FileManager.Value;
            var provider = new AzureBlobFileProvider(account.AccountName, account.AccessKey, account.ContainerName, TempDirectoryPath);

            var config = new FileSystemConfiguration {
                Request = new HttpContextWrapper(CurrentContext).Request,
                FileSystemProvider = provider,
                //uncomment the code below to enable file/folder management
                //AllowCopy = true,
                //AllowCreate = true,
                //AllowMove = true,
                //AllowDelete = true,
                //AllowRename = true,
                //AllowUpload = true,
                AllowDownload = true,
                UploadConfiguration = new UploadConfiguration {
                    MaxFileSize = 1048576
                },
                TempDirectory = TempDirectoryPath
            };
            var processor = new FileSystemCommandProcessor(config);
            var commandResult = processor.Execute(command, arguments);
            var result = commandResult.GetClientCommandResult();
            return command == FileSystemCommand.Download && commandResult.Success ? CreateDownloadResponse(result) : Request.CreateResponse(result);
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
