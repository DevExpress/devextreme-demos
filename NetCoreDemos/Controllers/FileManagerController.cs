using DevExtreme.NETCore.Demos.Models.FileManagement;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FileManagerController : Controller {
        public IActionResult Overview() {
            return View();
        }
        public IActionResult BindingToFileSystem() {
            return View();
        }
        public IActionResult BindingToHierarchicalStructure() {
            return View();
        }
        public IActionResult BindingToEF() {
            return View();
        }
        public IActionResult AzureServerBinding() {
            return View(AzureStorageAccount.FileManager);
        }
        public IActionResult AzureClientBinding() {
            return View(AzureStorageAccount.FileManager);
        }
        public IActionResult CustomThumbnails() {
            return View();
        }
        public IActionResult UICustomization() {
            return View();
        }
    }
}
