using DevExtreme.MVC.Demos.Models.FileManagement;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class FileManagerController : Controller {

        public ActionResult Overview() {
            return View();
        }
        public ActionResult BindingToFileSystem() {
            return View();
        }

        public ActionResult BindingToEF() {
            return View();
        }

        public ActionResult AzureServerBinding() {
            return View(AzureStorageAccount.FileManager.Value);
        }

        public ActionResult AzureClientBinding() {
            return View(AzureStorageAccount.FileManager.Value);
        }

        public ActionResult BindingToHierarchicalStructure() {
            return View();
        }
        public ActionResult CustomThumbnails() {
            return View();
        }
        public ActionResult UICustomization() {
            return View();
        }
    }
}
