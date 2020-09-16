$(function(){
    $('#exportButton').dxButton({
        text: 'Export to PDF',
        onClick: function() {
          const doc = new jsPDF('p', 'pt', 'a4');
          DevExpress.pdfExporter.exportDataGrid({
            jsPDFDocument: doc,
            component: dataGrid
          }).then(function() {
            doc.save('Employees.pdf');
          });
        }
    });

    var dataGrid = $('#gridContainer').dxDataGrid({
        dataSource: employees,
        allowColumnReordering: true,
        showBorders: true,
        grouping: {
            autoExpandAll: true,
        },
        keyExpr: 'ID',
        groupPanel: {
            visible: true
        },
        columns: [
            'FirstName',
            'LastName',
            'City',
            {
                dataField: 'State',
                groupIndex: 0
            },
            {
                dataField: 'Position',
                width: 130
            }, {
                dataField: 'BirthDate',
                dataType: 'date',
                width: 100
            }, {
                dataField: 'HireDate',
                dataType: 'date',
                width: 100
            }
        ]
    }).dxDataGrid('instance');
});
