using DevExtreme.MVC.Demos.Models.FileManagement;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class FileUploaderController : Controller {
        #region FileUploading
        public ActionResult FileUploading() {
            return View();
        }

        [HttpPost]
        public ActionResult Upload() {
            // Learn to use the entire functionality of the dxFileUploader widget.
            // http://js.devexpress.com/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxFileUploader/

            var myFile = Request.Files["myFile"];
            var targetLocation = Server.MapPath("~/Content/Files/");

            try {
                var path = Path.Combine(targetLocation, myFile.FileName);

                //Uncomment to save the file
                //myFile.SaveAs(path);
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
        public ActionResult FileSelection(string firstName, string lastName, HttpPostedFileBase photo) {
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

        void SaveFile(HttpPostedFileBase file) {
            var targetLocation = Server.MapPath("~/Content/Files/");

            try {
                var path = Path.Combine(targetLocation, file.FileName);

                //Uncomment to save the file
                //file.SaveAs(path);
            } catch {
                Response.StatusCode = 400;
            }
        }
        #endregion

        #region Validation
        public ActionResult Validation() {
            return View();
        }
        public ActionResult UploadImage(HttpPostedFileBase imageFile) {
            try {
                string[] imageExtensions = { ".jpg", ".jpeg", ".gif", ".png" };

                var fileName = imageFile.FileName.ToLower();
                var isValidExtenstion = imageExtensions.Any(ext => {
                    return fileName.LastIndexOf(ext) > -1;
                });

                if(isValidExtenstion) {
                    // Uncomment to save the file
                    //var path = Server.MapPath("~/Content/Files/");
                    //if (!Directory.Exists(path))
                    //    Directory.CreateDirectory(path);

                    //imageFile.SaveAs(path);
                }
            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            return new EmptyResult();
        }
        [HttpPost]
        public ActionResult UploadSmallFile(HttpPostedFileBase smallFile) {
            try {
                var maxFileSize = 4000000;
                if(smallFile.InputStream.Length < maxFileSize) {
                    // Uncomment to save the file
                    //var path = Server.MapPath("~/Content/Files/");
                    //if (!Directory.Exists(path))
                    //    Directory.CreateDirectory(path);

                    //smallFile.SaveAs(path);
                }

            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
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
        public ActionResult UploadChunk(HttpPostedFileBase file, string chunkMetadata) {
            var tempPath = Server.MapPath("~/Content/Files/");
            // Removes temporary files
            //RemoveTempFilesAfterDelay(tempPath, new TimeSpan(0, 5, 0));

            try {
                if(!string.IsNullOrEmpty(chunkMetadata)) {
                    var metaDataObject = JsonConvert.DeserializeObject<ChunkMetadata>(chunkMetadata);
                    CheckFileExtensionValid(metaDataObject.FileName);

                    // Uncomment to save the file
                    //var tempFilePath = Path.Combine(tempPath, metaDataObject.FileGuid + ".tmp");
                    //if (!Directory.Exists(tempPath))
                    //    Directory.CreateDirectory(tempPath);

                    //AppendContentToFile(tempFilePath, file);

                    //if (metaDataObject.Index == (metaDataObject.TotalCount - 1))
                    //    ProcessUploadedFile(tempFilePath, metaDataObject.FileName);
                }
            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            return new EmptyResult();
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
            var path = Server.MapPath("~/Content/Files/");
            System.IO.File.Copy(tempFilePath, Path.Combine(path, fileName));
        }
        void AppendContentToFile(string path, HttpPostedFileBase content) {
            using(var stream = new FileStream(path, FileMode.Append, FileAccess.Write)) {
                content.InputStream.CopyTo(stream);
                CheckMaxFileSize(stream);
            }
        }
        #endregion

        #region AzureDirectUploading
        public ActionResult AzureDirectUploading() {
            return View(AzureStorageAccount.FileUploader.Value);
        }
        #endregion

        #region CustomDropzone
        public ActionResult CustomDropzone() {
            return View();
        }
        #endregion
    }
}
