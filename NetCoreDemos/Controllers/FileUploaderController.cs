using DevExtreme.NETCore.Demos.Models.FileManagement;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public partial class FileUploaderController : Controller {
        #region FileUploading
        public ActionResult FileUploading() {
            return View();
        }

        [HttpPost]
        public ActionResult Upload() {
            // Learn more on the functionality of the dxFileUploader widget at:
            // http://js.devexpress.com/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxFileUploader/
            try {
                var myFile = Request.Form.Files["myFile"];
                var path = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
                // Uncomment to save the file
                //if(!Directory.Exists(path))
                //    Directory.CreateDirectory(path);

                //using(var fileStream = System.IO.File.Create(Path.Combine(path, myFile.FileName))) {
                //    myFile.CopyTo(fileStream);
                //}
            } catch {
                Response.StatusCode = 400;
            }

            return new EmptyResult();
        }
        #endregion

        #region FileSelection
        public ActionResult FileSelection() {
            return View();
        }

        [HttpPost]
        public ActionResult FileSelection(string firstName, string lastName, IFormFile photo) {
            // Learn to use the entire functionality of the dxFileUploader widget.
            // http://js.devexpress.com/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxFileUploader/

            ViewBag.FirstName = firstName;
            ViewBag.LastName = lastName;
            ViewBag.Photo = "[No photo]";

            if(photo != null) {
                SaveFile(photo);
                ViewBag.Photo = photo.FileName;
            }

            return View("SubmissionResult");
        }

        void SaveFile(IFormFile file) {
            try {
                var path = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
                // Uncomment to save the file
                //if(!Directory.Exists(path))
                //    Directory.CreateDirectory(path);

                //using(var fileStream = System.IO.File.Create(Path.Combine(path, file.FileName))) {
                //    file.CopyTo(fileStream);
                //}
            } catch {
                Response.StatusCode = 400;
            }
        }
        #endregion

        #region Validation
        public ActionResult Validation() {
            return View();
        }
        [HttpPost]
        public ActionResult UploadImage(IFormFile imageFile) {
            try {
                string[] imageExtensions = { ".jpg", ".jpeg", ".gif", ".png" };

                var fileName = imageFile.FileName.ToLower();
                var isValidExtenstion = imageExtensions.Any(ext => {
                    return fileName.LastIndexOf(ext) > -1;
                });

                if(isValidExtenstion) {
                    // Uncomment to save the file
                    //var path = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
                    //if(!Directory.Exists(path))
                    //    Directory.CreateDirectory(path);

                    //using(var fileStream = System.IO.File.Create(Path.Combine(path, imageFile.FileName))) {
                    //    imageFile.CopyTo(fileStream);
                    //}
                }
            } catch {
                Response.StatusCode = 400;
            }

            return new EmptyResult();
        }
        [HttpPost]
        public ActionResult UploadSmallFile(IFormFile smallFile) {
            try {
                var maxFileSize = 4000000;
                if(smallFile.Length < maxFileSize) {
                    // Uncomment to save the file
                    //var path = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
                    //if(!Directory.Exists(path))
                    //    Directory.CreateDirectory(path);

                    //using(var fileStream = System.IO.File.Create(Path.Combine(path, smallFile.FileName))) {
                    //    smallFile.CopyTo(fileStream);
                    //}
                }

            } catch {
                Response.StatusCode = 400;
            }

            return new EmptyResult();
        }
        #endregion

        #region ChunkUploading
        public class ChunkMetadata {
            public int Index { get; set; }
            public int TotalCount { get; set; }
            public int FileSize { get; set; }
            public string FileName { get; set; }
            public string FileType { get; set; }
            public string FileGuid { get; set; }
        }

        public ActionResult ChunkUploading() {
            return View();
        }

        [HttpPost]
        public ActionResult UploadChunk(IFormFile file, string chunkMetadata) {
            var tempPath = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            // Removes temporary files
            //RemoveTempFilesAfterDelay(tempPath, new TimeSpan(0, 5, 0));

            try {
                if(!string.IsNullOrEmpty(chunkMetadata)) {
                    var metaDataObject = JsonConvert.DeserializeObject<ChunkMetadata>(chunkMetadata);
                    CheckFileExtensionValid(metaDataObject.FileName);

                    // Uncomment to save the file
                    //var tempFilePath = Path.Combine(tempPath, metaDataObject.FileGuid + ".tmp");
                    //if(!Directory.Exists(tempPath))
                    //    Directory.CreateDirectory(tempPath);

                    //AppendContentToFile(tempFilePath, file);

                    //if(metaDataObject.Index == (metaDataObject.TotalCount - 1))
                    //    ProcessUploadedFile(tempFilePath, metaDataObject.FileName);
                }
            } catch {
                return BadRequest();
            }
            return Ok();
        }
        void RemoveTempFilesAfterDelay(string path, TimeSpan delay) {
            var dir = new DirectoryInfo(path);
            if(dir.Exists)
                foreach(var file in dir.GetFiles("*.tmp").Where(f => f.LastWriteTimeUtc.Add(delay) < DateTime.UtcNow))
                    file.Delete();
        }
        void CheckFileExtensionValid(string fileName) {
            fileName = fileName.ToLower();
            string[] imageExtensions = { ".jpg", ".jpeg", ".gif", ".png" };

            var isValidExtenstion = imageExtensions.Any(ext => {
                return fileName.LastIndexOf(ext) > -1;
            });
            if(!isValidExtenstion)
                throw new Exception("Not allowed file extension");
        }
        void CheckMaxFileSize(FileStream stream) {
            if(stream.Length > 4000000)
                throw new Exception("File is too large");
        }
        void ProcessUploadedFile(string tempFilePath, string fileName) {
            // Check if the uploaded file is a valid image
            var path = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            System.IO.File.Copy(tempFilePath, Path.Combine(path, fileName));
        }
        void AppendContentToFile(string path, IFormFile content) {
            using(var stream = new FileStream(path, FileMode.Append, FileAccess.Write)) {
                content.CopyTo(stream);
                CheckMaxFileSize(stream);
            }
        }
        #endregion

        #region AzureDirectUploading
        public ActionResult AzureDirectUploading() {
            return View(AzureStorageAccount.FileUploader);
        }
        #endregion

        #region CustomDropzone
        public ActionResult CustomDropzone() {
            return View();
        }
        #endregion
    }
}
