using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Hosting;
using System.IO;
using System.Web.Http.Cors;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    [EnableCors(origins: "*", headers: "*", methods: "*", SupportsCredentials = true)]
    public class TreeListDataController : ApiController {
        [HttpGet]
        public HttpResponseMessage Get([FromUri] string[] parentIds) {
            var rootPath = HostingEnvironment.MapPath("~").TrimEnd('\\');
            var childNodes = parentIds.SelectMany(parentId => {
                var parentPath = String.IsNullOrEmpty(parentId) ? rootPath : Path.Combine(rootPath, parentId);
                return Directory.EnumerateFileSystemEntries(parentPath);
            })
                .Where(path => Path.GetFullPath(path).StartsWith(rootPath))
                .Select(path => {
                    var fileInfo = new FileInfo(path);
                    var isDirectory = File.GetAttributes(path).HasFlag(FileAttributes.Directory);
                    var parentId = Path.GetDirectoryName(path.Substring(rootPath.Length + 1));

                    return new {
                        id = Path.Combine(parentId, Path.GetFileName(path)),
                        parentId,
                        name = Path.GetFileName(path),
                        modifiedDate = fileInfo.LastWriteTime,
                        createdDate = fileInfo.CreationTime,
                        size = isDirectory ? (long?)null : fileInfo.Length,
                        isDirectory,
                        hasItems = isDirectory && Directory.EnumerateFileSystemEntries(path).Count() > 0
                    };
                })
                .Where(i => i.name != "bin" && i.name != "obj" && i.name != "packages" && i.name.Length > 0 && !i.name.StartsWith("."))
                .OrderByDescending(i => i.isDirectory)
                .ThenBy(i => i.name);

            return Request.CreateResponse(childNodes);
        }
    }
}
