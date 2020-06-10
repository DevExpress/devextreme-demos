using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class TreeListController : Controller {
        public ActionResult Overview() {
            return View();
        }
        public ActionResult SimpleArrayPlainStructure() {
            return View();
        }
        public ActionResult SimpleArrayHierarchicalStructure() {
            return View();
        }
        public ActionResult LoadDataOnDemand() {
            return View();
        }
        public ActionResult WebAPIService() {
            return View();
        }
        public ActionResult MultipleSorting() {
            return View();
        }
        public ActionResult RowEditing() {
            return View();
        }
        public ActionResult CellEditing() {
            return View();
        }
        public ActionResult BatchEditing() {
            return View();
        }
        public ActionResult FormEditing() {
            return View();
        }
        public ActionResult PopupEditing() {
            return View();
        }
        public ActionResult FocusedRow() {
            return View();
        }
        public ActionResult CustomizeKeyboardNavigation() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult ColumnChooser() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult Reordering() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult Resizing() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult ColumnFixing() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult Adaptability() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult UsingSearchPanel() {
            return View();
        }
        public ActionResult UsingFilterRow() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult UsingHeaderFilter() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult MultipleRowSelection() {
            return View();
        }
        public ActionResult SingleRowSelection() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult StatePersistence() {
            return View();
        }
        public ActionResult Paging() {
            return View();
        }
        public ActionResult FilterPanel() {
            return View(SampleData.TreeListEmployees);
        }
        public ActionResult FilterModes() {
            return View();
        }
        public ActionResult KeyboardNavigation() {
            return View();
        }

        public ActionResult LocalReordering() {
            return View();
        }
    }
}
