using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class TreeViewController : Controller {
        #region HierarchicalDataStructure
        public ActionResult HierarchicalDataStructure() {
            return View();
        }

        [HttpGet]
        public ActionResult GetHierarchicalData(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TreeViewHierarchicalData.Products, loadOptions)), "application/json");
        }
        #endregion

        public ActionResult FlatDataStructure() {
            return View();
        }

        #region ItemSelectionAndCustomization
        public ActionResult ItemSelectionAndCustomization() {
            return View();
        }

        [HttpGet]
        public ActionResult Employees(DataSourceLoadOptions loadOptions) {
            var serializedEmployees = JsonConvert.SerializeObject(DataSourceLoader.Load(TreeViewHierarchicalDataForSelection.Employees, loadOptions));
            return Content(serializedEmployees, "application/json");
        }

        #endregion

        public ActionResult VirtualMode() {
            return View();
        }

        public ActionResult LoadDataOnDemand() {
            return View();
        }

        #region TreeViewWithSearchBar
        public ActionResult TreeViewWithSearchBar() {
            return View();
        }

        [HttpGet]
        public ActionResult GetHierarchicalDataForSearch(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TreeViewHierarchicalDataForSearch.Products, loadOptions)), "application/json");
        }
        #endregion

        #region ContextMenuIntegration
        public ActionResult ContextMenuIntegration() {
            return View();
        }

        [HttpGet]
        public ActionResult GetHierarchicalDataForContextMenu(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TreeViewHierarchicalDataForContextMenu.Products, loadOptions)), "application/json");
        }
        #endregion

        #region DragAndDropPlainDataStructure
        public ActionResult DragAndDropPlainDataStructure() {
            return View();
        }

        public ActionResult GetPlainDataForDragAndDrop(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TreeViewPlainDataForDragAndDrop.FileSystemItems, loadOptions)), "application/json");
        }
        #endregion

        #region DragAndDropHierarchicalDataStructure
        public ActionResult DragAndDropHierarchicalDataStructure() {
            return View();
        }

        public ActionResult GetHierarchicalDataForDragAndDrop(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TreeViewHierarchicalDataForDragAndDrop.FileSystemItems, loadOptions)), "application/json");
        }
        #endregion
    }
}
