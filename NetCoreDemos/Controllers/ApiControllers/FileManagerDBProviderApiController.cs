using DevExtreme.AspNet.Mvc.FileManagement;
using DevExtreme.NETCore.Demos.Models.FileManagement;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FileManagerDbProviderApiController : Controller {
        public FileManagerDbProviderApiController(DbFileProvider dbFileProvider) {
            DBFileProvider = dbFileProvider ?? throw new ArgumentNullException(nameof(dbFileProvider));
        }

        DbFileProvider DBFileProvider { get; }

        [Route("api/file-manager-db", Name = "FileManagerDBProviderApi")]
        public IActionResult Process(FileSystemCommand command, string arguments) {
            var config = new FileSystemConfiguration {
                Request = Request,
                FileSystemProvider = DBFileProvider,
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
