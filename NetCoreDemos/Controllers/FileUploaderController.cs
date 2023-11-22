using DevExtreme.NETCore.Demos.Models.FileManagement;
using DevExtreme.NETCore.Demos.Models.FileUploader;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public partial class FileUploaderController : Controller {
        #region FileUploading
        public ActionResult FileUploading() {
            return View();
        }

        [HttpPost]
        [EnableCors("CorsPolicy")]
        public ActionResult Upload(IFormFile myFile) {
            try {
                // Write code that saves the 'myFile' file.
                // Don't rely on or trust the FileName property without validation
            } catch {
                return BadRequest();
            }

            return Ok();
        }
        #endregion

        #region FileSelection
        public ActionResult FileSelection() {
            return View();
        }

        [HttpPost("action")]
        public ActionResult FileSelection(string firstName, string lastName, IFormFile photo) {
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
        const long MaxFileSize = 4_000_000;
        string[] ImageExtensions = { ".JPG", ".JPEG", ".GIF", ".PNG" };

        public ActionResult Validation() {
            return View();
        }

        [HttpPost]
        public ActionResult UploadImage(IFormFile imageFile) {
            try {
                var extension = Path.GetExtension(imageFile.FileName).ToUpperInvariant();
                var isValidExtenstion = ImageExtensions.Contains(extension);

                if(!isValidExtenstion) {
                    throw new InvalidOperationException();
                }

                // Write code that saves the 'imageFile' file.
                // Don't rely on or trust the FileName property without validation.
            } catch {
                return BadRequest();
            }

            return Ok();
        }

        [HttpPost("action")]
        public ActionResult UploadSmallFile(IFormFile smallFile) {
            try {
                var isValidSize = smallFile.Length <= MaxFileSize;

                if(!isValidSize) {
                    throw new InvalidOperationException();
                }

                // Write code that saves the 'smallFile' file.
                // Don't rely on or trust the FileName property without validation.
            } catch {
                return BadRequest();
            }

            return Ok();
        }
        #endregion

        #region ChunkUploading
        public ActionResult ChunkUploading() {
            return View();
        }

        [HttpPost]
        public ActionResult UploadChunk(IFormFile file) {
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
                return BadRequest();
            }
            return Ok();
        }
        #endregion

        #region CustomDropzone
        public ActionResult CustomDropzone() {
            return View();
        }
        #endregion
    }
}
