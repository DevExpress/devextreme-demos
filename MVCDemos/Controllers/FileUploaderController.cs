using DevExtreme.MVC.Demos.Models.FileManagement;
using DevExtreme.MVC.Demos.Models.FileUploader;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class FileUploaderController : Controller {
        #region FileUploading
        public ActionResult FileUploading() {
            return View();
        }

        [HttpPost]
        public ActionResult Upload() {
            var file = Request.Files["myFile"];

            try {
                // Write code that saves the 'file' file.
                // Don't rely on or trust the FileName property without validation
            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
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
                // Write code that saves the 'photo' file.
                // Don't rely on or trust the FileName property without validation.

                ViewBag.Photo = photo.FileName;
            }

            return View("SubmissionResult");
        }
        #endregion

        #region Validation
        const long MaxFileSize = 4000000;
        string[] ImageExtensions = { ".JPG", ".JPEG", ".GIF", ".PNG" };

        public ActionResult Validation() {
            return View();
        }

        [HttpPost]
        public ActionResult UploadImage(HttpPostedFileBase imageFile) {
            try {
                var extension = Path.GetExtension(imageFile.FileName).ToUpperInvariant();
                var isValidExtenstion = ImageExtensions.Contains(extension);

                if(!isValidExtenstion) {
                    throw new InvalidOperationException();
                }

                // Write code that saves the 'imageFile' file.
                // Don't rely on or trust the FileName property without validation.
            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            return new EmptyResult();
        }

        [HttpPost]
        public ActionResult UploadSmallFile(HttpPostedFileBase smallFile) {
            try {
                var isValidSize = smallFile.InputStream.Length <= MaxFileSize;

                if(!isValidSize) {
                    throw new InvalidOperationException();
                }

                // Write code that saves the 'smallFile' file.
                // Don't rely on or trust the FileName property without validation.
            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            return new EmptyResult();
        }
        #endregion

        #region ChunkUploading
        public ActionResult ChunkUploading() {
            return View();
        }

        [HttpPost]
        public ActionResult UploadChunk(HttpPostedFileBase file) {
            var chunkMetadata = Request.Form["chunkMetadata"];

            try {
                if(!string.IsNullOrEmpty(chunkMetadata)) {
                    var metaDataObject = JsonConvert.DeserializeObject<ChunkMetadata>(chunkMetadata);

                    // Write code that appends the 'file' file chunk to the temporary file.
                    // You can use the $"{metaDataObject.FileGuid}.tmp" name for the temporary file.
                    // Don't rely on or trust the FileName property without validation.

                    if(metaDataObject.Index == metaDataObject.TotalCount - 1) {
                        // Write code that saves the 'file' file.
                        // Don't rely on or trust the FileName property without validation.
                    }
                }
            } catch {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            return new EmptyResult();
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
