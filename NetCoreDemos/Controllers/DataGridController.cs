using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.DataGrid;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class DataGridController : Controller {
        public ActionResult SimpleArray() {
            return View();
        }

        public ActionResult AjaxRequest() {
            return View();
        }

        public ActionResult WebAPIService() {
            return View();
        }

        public ActionResult ODataService() {
            return View();
        }

        public ActionResult RecordPaging() {
            return View();
        }

        public ActionResult VirtualScrolling() {
            return View();
        }

        public ActionResult RemoteVirtualScrolling() {
            return View();
        }

        public ActionResult HorizontalVirtualScrolling() {
            return View();
        }

        public ActionResult InfiniteScrolling() {
            return View();
        }

        public ActionResult RowEditingAndEditingEvents() {
            return View();
        }

        public ActionResult BatchEditing() {
            return View();
        }

        public ActionResult CellEditingAndEditingAPI() {
            return View();
        }

        public ActionResult SignalRService() {
            return View();
        }

        public ActionResult DataValidation() {
            return View();
        }

        public ActionResult FormEditing() {
            return View();
        }

        public ActionResult PopupEditing() {
            return View();
        }

        public ActionResult CascadingLookups() {
            return View();
        }

        public ActionResult RecordGrouping() {
            return View();
        }

        public ActionResult RemoteGrouping() {
            return View();
        }

        public ActionResult MultipleSorting() {
            return View();
        }

        public ActionResult Filtering() {
            return View();
        }

        public ActionResult FilterPanel() {
            return View(SampleData.OrdersWithCustomerInfo);
        }

        public ActionResult FocusedRow() {
            return View();
        }

        public ActionResult FilteringAPI() {
            return View();
        }

        public ActionResult RowSelection() {
            return View(SampleData.DataGridEmployees.Take(5).ToList<Employee>());
        }

        public ActionResult MultipleRecordSelectionModes() {
            return View();
        }

        public ActionResult MultipleRecordSelectionAPI() {
            return View(SampleData.DataGridEmployees.Take(10).ToList<Employee>());
        }

        public ActionResult DeferredSelection() {
            return View();
        }

        public ActionResult ColumnCustomization() {
            return View(SampleData.DataGridEmployees.Take(10).ToList<Employee>());
        }

        public ActionResult ColumnsBasedOnADataSource() {
            return View();
        }

        public ActionResult MultiRowHeadersBands() {
            return View(SampleData.CountriesPopulationAndGDP);
        }

        public ActionResult ColumnResizing() {
            return View();
        }

        public ActionResult StatePersistence() {
            return View(SampleData.Orders);
        }

        public ActionResult Appearance() {
            return View(SampleData.DataGridEmployees.Take(10).ToList<Employee>());
        }

        public ActionResult RightToLeftSupport() {
            return View(SampleData.EuropeanCountries);
        }

        public ActionResult CommandColumnCustomization() {
            return View();
        }

        public ActionResult ColumnTemplate() {
            return View(SampleData.DataGridEmployees.Take(9).ToList<Employee>());
        }

        public ActionResult RowTemplate() {
            return View(SampleData.DataGridEmployees.Take(9).ToList<Employee>());
        }

        public ActionResult CellCustomization() {
            return View(SampleData.IntradayData);
        }

        public ActionResult Overview() {
            return View();
        }

        public ActionResult GridSummaries() {
            return View();
        }

        public ActionResult GroupSummaries() {
            return View();
        }

        public ActionResult CustomSummaries() {
            return View();
        }

        public ActionResult MasterDetailView() {
            return View();
        }

        public ActionResult MasterDetailAPI() {
            return View();
        }

        public ActionResult AdvancedMasterDetailView() {
            return View();
        }

        public ActionResult ToolbarCustomization() {
            return View(SampleData.Orders.Take(12).ToList<Order>());
        }

        public ActionResult ExportToExcel() {
            return View(SampleData.DataGridEmployees.Take(10).ToList<Employee>());
        }

        public ActionResult ExcelCellCustomization() {
            return View(SampleData.Orders);
        }

        public ActionResult ExcelJS() {
            return View(SampleData.Orders);
        }

        public ActionResult ExcelJSOverview() {
            return View(SampleData.DataGridEmployees.Take(10));
        }

        public ActionResult ExcelJSExportImages() {
            return View();
        }

        public ActionResult ExcelJSExportMultipleGrids() {
            return View();
        }

        public ActionResult ExcelJSCellCustomization() {
            return View();
        }

        public ActionResult ExcelJSHeaderAndFooter() {
            return View(SampleData.CountriesPopulationAndGDP);
        }

        public ActionResult ExportToPDF() {
            return View();
        }

        public ActionResult GridAdaptabilityOverview() {
            return View(SampleData.Orders);
        }

        public ActionResult GridColumnsHidingPriority() {
            return View(SampleData.Orders);
        }

        public ActionResult CollaborativeEditing() {
            return View();
        }

        public ActionResult RealTimeUpdates() {
            return View();
        }

        public ActionResult RecalculateWhileEditing() {
            return View(SampleData.Orders.Where(o => o.ID != 14).ToList());
        }

        public ActionResult CRUDOperations() {
            return View();
        }

        public ActionResult CustomizeKeyboardNavigation() {
            return View();
        }

        public ActionResult KeyboardNavigation() {
            return View();
        }

        public ActionResult CustomEditors() {
            return View();
        }

        public ActionResult LocalReordering() {
            return View();
        }

        public ActionResult RemoteReordering() {
            return View();
        }

        public ActionResult DnDBetweenGrids() {
            return View();
        }

        public ActionResult BatchUpdateRequest() {
            return View();
        }

        public ActionResult EditStateManagement() {
            return View();
        }
    }
}
