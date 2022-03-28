The [DataGrid](/Documentation/ApiReference/UI_Components/dxDataGrid/) allows you to export its contents to a PDF document. To enable PDF export operations, you must import the <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> library.

Call the [exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions) method that belongs to the [pdfExporter](/Documentation/ApiReference/Common/Utils/pdfExporter/) module to export DataGrid content to a PDF document. You need to specify two required properties:

- [jsPDFDocument](/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#jsPDFDocument)    
Specifies the **jsPDF** instance.

- [component](/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#component)    
Specifies the DataGrid's instance.


In this demo, click the **Export to PDF** button to call the **exportDataGrid(options)** method.
