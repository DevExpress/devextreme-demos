const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  const priceCaption = 'Price';
  const ratingCaption = 'Rating';

  $scope.buttonOptions = {
    text: 'Export multiple grids',
    icon: 'exportpdf',
    onClick() {
      const dataGrid1 = $('#priceDataGrid').dxDataGrid('instance');
      const dataGrid2 = $('#ratingDataGrid').dxDataGrid('instance');

      // eslint-disable-next-line new-cap
      const doc = new jsPDF();

      let rowIndex = -1;
      function setAlternatingRowsBackground(gridCell, pdfCell) {
        if (gridCell.rowType === 'header' || gridCell.rowType === 'data') {
          if (rowIndex % 2 === 0) {
            pdfCell.backgroundColor = '#D3D3D3';
          }
        }
      }

      DevExpress.pdfExporter.exportDataGrid({
        jsPDFDocument: doc,
        component: dataGrid1,
        topLeft: { x: 0, y: 5 },
        columnWidths: [20, 40, 40, 40],
        customizeCell: ({ gridCell, pdfCell }) => {
          setAlternatingRowsBackground(gridCell, pdfCell);
        },
        onRowExporting: () => { rowIndex += 1; },
      }).then(() => {
        doc.addPage();
        rowIndex = -1;
        DevExpress.pdfExporter.exportDataGrid({
          jsPDFDocument: doc,
          component: dataGrid2,
          topLeft: { x: 0, y: 5 },
          columnWidths: [20, 40, 40, 40],
          customizeCell: ({ gridCell, pdfCell }) => {
            setAlternatingRowsBackground(gridCell, pdfCell);
          },
          onRowExporting: () => { rowIndex += 1; },
        }).then(() => {
          doc.save('MultipleGrids.pdf');
        });
      });
    },
  };

  $scope.tabPanelOptions = {
    dataSource: [{
      title: priceCaption,
      template() {
        return $("<div id='priceDataGrid'>").dxDataGrid({
          width: '100%',
          columns: [
            { dataField: 'Product_ID', caption: 'ID', width: 50 },
            { dataField: 'Product_Name', caption: 'Name' },
            {
              dataField: 'Product_Sale_Price', caption: 'Sale Price', dataType: 'number', format: 'currency',
            },
            {
              dataField: 'Product_Retail_Price', caption: 'Retail Price', dataType: 'number', format: 'currency',
            },
          ],
          showBorders: true,
          rowAlternationEnabled: true,
          dataSource: {
            store: {
              type: 'odata',
              url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
              key: 'Product_ID',
            },
            select: ['Product_ID', 'Product_Name', 'Product_Sale_Price', 'Product_Retail_Price'],
            filter: ['Product_ID', '<', 10],
          },
        });
      },
    }, {
      title: ratingCaption,
      template() {
        return $("<div id='ratingDataGrid'>").dxDataGrid({
          width: '100%',
          columns: [
            { dataField: 'Product_ID', caption: 'ID', width: 50 },
            { dataField: 'Product_Name', caption: 'Name' },
            { dataField: 'Product_Consumer_Rating', caption: 'Rating' },
            { dataField: 'Product_Category', caption: 'Category' },
          ],
          showBorders: true,
          rowAlternationEnabled: true,
          dataSource: {
            store: {
              type: 'odata',
              url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
              key: 'Product_ID',
            },
            select: ['Product_ID', 'Product_Name', 'Product_Consumer_Rating', 'Product_Category'],
            filter: ['Product_ID', '<', 10],
          },
        });
      },
    }],
    itemTitleTemplate(itemData, itemIndex, itemElement) {
      itemElement.append(`<span class='dx-tab-text'>${itemData.title}</span>`);
    },
    deferRendering: false,
  };
});
