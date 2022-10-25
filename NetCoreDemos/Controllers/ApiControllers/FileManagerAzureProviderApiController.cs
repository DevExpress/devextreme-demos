﻿using DevExtreme.AspNet.Mvc.FileManagement;
using DevExtreme.NETCore.Demos.Models.FileManagement;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FileManagerAzureProviderApiController : Controller {
        public FileManagerAzureProviderApiController(IWebHostEnvironment webHostEnvironment, AzureBlobFileProvider azureFileProvider) {
            WebHostEnvironment = webHostEnvironment;
            AzureFileProvider = azureFileProvider ?? throw new ArgumentNullException(nameof(azureFileProvider));
        }

        IWebHostEnvironment WebHostEnvironment { get; }
        AzureBlobFileProvider AzureFileProvider { get; }

        [Route("api/file-manager-azure", Name = "FileManagerAzureProviderApi")]
        public object FileSystem(FileSystemCommand command, string arguments) {
            var config = new FileSystemConfiguration {
                Request = Request,
                FileSystemProvider = AzureFileProvider,
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
                TempDirectory = WebHostEnvironment.ContentRootPath + "/UploadTemp"
            };
            var processor = new FileSystemCommandProcessor(config);
            var result = processor.Execute(command, arguments);
            return result.GetClientCommandResult();
        }
    }
}
