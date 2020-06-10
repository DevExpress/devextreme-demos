using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Hosting;
using System.IO;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class TreeViewDataController : ApiController {
        [HttpGet]
        public HttpResponseMessage Get(string parentId) {
            var rootPath = HostingEnvironment.MapPath("~");
            var parentPath = String.IsNullOrEmpty(parentId) ? rootPath : Path.Combine(rootPath, parentId);

            var childNodes = Directory.EnumerateFileSystemEntries(parentPath)
                .Where(path => Path.GetFullPath(path).StartsWith(rootPath))
                .Select(path => new {
                    id = Path.Combine(parentPath, Path.GetFileName(path)),
                    parentId,
                    text = Path.GetFileName(path),
                    hasItems = File.GetAttributes(path).HasFlag(FileAttributes.Directory)
                })
                .Where(i => i.text != "bin" && i.text != "obj" && !i.text.StartsWith("."))
                .OrderByDescending(i => i.hasItems)
                .ThenBy(i => i.text);

            return Request.CreateResponse(childNodes);
        }
    }
}
