﻿using System;
using System.Linq;
using System.Net.Http;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {

    [Route("api/[controller]")]
    public class TreeListDataController : Controller {
        IWebHostEnvironment _webHostEnvironment;

        public TreeListDataController(IWebHostEnvironment webHostEnvironment) {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public object Get(string parentIds) {
            var parents = string.IsNullOrEmpty(parentIds) ? new[] { "" } : parentIds.Split(',');
#if PUBLISH
            var rootPath = Path.Combine(_webHostEnvironment.ContentRootPath, "Sources");
#else
            var rootPath = _webHostEnvironment.ContentRootPath;
#endif
            var childNodes = parents.SelectMany(parentId => {
                var parentPath = String.IsNullOrEmpty(parentId) ? rootPath : Path.Combine(rootPath, parentId);
                return Directory.EnumerateFileSystemEntries(parentPath);
            })
                .Where(path => Path.GetFullPath(path).StartsWith(rootPath))
                .Select(path => {
                    var fileInfo = new FileInfo(path);
                    var isDirectory = System.IO.File.GetAttributes(path).HasFlag(FileAttributes.Directory);
                    var parentId = Path.GetDirectoryName(path.Substring(rootPath.Length + 1));

                    return new {
                        id = Path.Combine(parentId, Path.GetFileName(path)),
                        parentId,
#if PUBLISH
                        name = Path.GetFileNameWithoutExtension(path),
#else
                        name = Path.GetFileName(path),
#endif
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

            return childNodes;
        }
    }
}
