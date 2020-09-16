$(function(){
    $('#btnContainer').dxButton({
        text: 'Export to PDF',
        onClick: function() {
          const pdfDoc = new jsPDF('p', 'pt', 'a4');
          const options = {
            jsPDFDocument: pdfDoc,
            component: $('#gridContainer').dxDataGrid('instance')
          };
          DevExpress.pdfExporter.exportDataGrid(options).then(function(){
            pdfDoc.save("dxDataGrid.pdf");
          });
        }
    });

    $('#gridContainer').dxDataGrid({
        dataSource: employees,
        allowColumnReordering: true,
        showBorders: true,
        grouping: {
            autoExpandAll: true,
        },
        keyExpr: "ID",
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
    });
});
