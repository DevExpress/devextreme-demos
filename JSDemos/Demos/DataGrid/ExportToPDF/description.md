Our [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) allows you to easily and accurately export its contents to a PDF file. To enable the export operation, you must reference or import the <a href="https://github.com/MrRio/jsPDF" target="_blank">jsPDF</a> library.

Once you've referenced/imported `jsPDF`, call the **DevExpress**.**pdfExporter**.**exportDataGrid(options)** method to export **DataGrid** content in the PDF format.

In this demo, the **exportDataGrid(options)** method is called when you click the Export to PDF button. Review the export code in the button's [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) handler to learn more.
