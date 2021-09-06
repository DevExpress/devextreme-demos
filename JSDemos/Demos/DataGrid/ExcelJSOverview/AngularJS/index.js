const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.gridOptions = {
    dataSource: employees,
    keyExpr: 'ID',
    showBorders: true,
    selection: {
      mode: 'multiple',
    },
    groupPanel: {
      visible: true,
    },
    export: {
      enabled: true,
      allowExportSelectedData: true,
    },
    onExporting(e) {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Employees');

      DevExpress.excelExporter.exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Employees.xlsx');
        });
      });
      e.cancel = true;
    },
    columns: [
      'FirstName',
      'LastName',
      'City',
      {
        dataField: 'State',
        groupIndex: 0,
      }, {
        dataField: 'Position',
        width: 130,
      }, {
        dataField: 'BirthDate',
        dataType: 'date',
        width: 100,
      }, {
        dataField: 'HireDate',
        dataType: 'date',
        width: 100,
      },
    ],
  };
});
