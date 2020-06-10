using System;
using System.Linq;
using System.Net.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class TreeViewDataController : Controller {

        IHostingEnvironment _hostingEnvironment;

        public TreeViewDataController(IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public object Get(string parentId) {
            var rootPath = _hostingEnvironment.ContentRootPath;
            var parentPath = String.IsNullOrEmpty(parentId) ? rootPath : Path.Combine(rootPath, parentId);

            var childNodes = Directory.EnumerateFileSystemEntries(parentPath)
                .Where(path => Path.GetFullPath(path).StartsWith(rootPath))
                .Select(path => new {
                    id = Path.Combine(parentPath, Path.GetFileName(path)),
                    parentId,
                    text = Path.GetFileName(path),
                    hasItems = System.IO.File.GetAttributes(path).HasFlag(FileAttributes.Directory)
                })
                .Where(i => i.text != "bin" && i.text != "obj" && !i.text.StartsWith("."))
                .OrderByDescending(i => i.hasItems)
                .ThenBy(i => i.text);

            return childNodes;
        }
    }
}
