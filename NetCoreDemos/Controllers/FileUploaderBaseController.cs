using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public partial class FileUploaderController : Controller {
        IHostingEnvironment _hostingEnvironment;

        public FileUploaderController(IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }
    }
}
