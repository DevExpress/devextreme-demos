var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
  $scope.gridOptions = {
    dataSource: companies,
    keyExpr: "ID",
    showBorders: true,
    groupPanel: {
      visible: true
    },
    grouping: {
      autoExpandAll: true,
    },
    sortByGroupSummaryInfo: [{
      summaryItem: "count"
    }],
    columns: [{
      dataField: "Name",
      width: 190
    }, {
      dataField: "Address",
      width: 200
    },
    "City",
    {
      dataField: "State",
      groupIndex: 0
    }, {
      dataField: "Phone",
      format: function(value) {
        var USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);
        return "(" + USNumber[1] + ") " + USNumber[2] + "-" + USNumber[3];
      }
    }, {
      dataField: "Website",
      caption: "",
      alignment: "center",
      width: 100,
      cellTemplate: function(container, options) {
        return $("<a>", { "href": options.value, "target": "_blank" }).text('Website');
      }
    }],
    summary: {
      totalItems: [{
        column: "Name",
        summaryType: "count",
        displayFormat: "Total count: {0} companies" }
      ]
    },
    export: {
      enabled: true
    },
    onExporting: function(e) {
      var workbook = new ExcelJS.Workbook();
      var worksheet = workbook.addWorksheet('Companies');

      worksheet.columns = [
        { width: 5 }, { width: 30 }, { width: 25 }, { width: 15 }, { width: 25 }, { width: 40 }
      ];

      DevExpress.excelExporter.exportDataGrid({
        component: e.component,
        worksheet: worksheet,
        keepColumnWidths: false,
        topLeftCell: { row: 2, column: 2 },
        customizeCell: function(options) {
          var gridCell = options.gridCell;
          var excelCell = options.excelCell;

          if(gridCell.rowType === "data") {
            if(gridCell.column.dataField === 'Phone') {
              excelCell.value = parseInt(gridCell.value);
              excelCell.numFmt = '[<=9999999]###-####;(###) ###-####';
            }
            if(gridCell.column.dataField === 'Website') {
              excelCell.value = { text: gridCell.value, hyperlink: gridCell.value };
              excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
              excelCell.alignment = { horizontal: 'left' };
            }
          }
          if(gridCell.rowType === "group") {
            excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb: "BEDFE6" } };
          }
          if(gridCell.rowType === "totalFooter" && excelCell.value) {
            excelCell.font.italic = true;
          }
        }
      }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) {
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
        });
      });
      e.cancel = true;
    }
  };
});