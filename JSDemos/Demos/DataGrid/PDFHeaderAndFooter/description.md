<a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> library allows you to customize PDF files, write custom texts and draw custom content. This demo uses this functionality to add a header (a title before exported data) and a footer (a note after exported data).

## Add a Header

1. Call the [exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions) method.

2. Use the [topLeft](/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/topLeft/topLeft.md) object to specify a start position for DataGrid export. This position should be below the header.

3. Execute a promise after the **exportDataGrid(options)** method. In this promise, specify position and appearance of the header.

## Add a Footer

1. Call the **exportDataGrid(options)** method.

2. Use the [customDrawCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customDrawCell) function to count the coordinate of the last right cell of the DataGrid.

3. Execute a promise after the **exportDataGrid(options)** method. In this promise, specify position and appearance of the footer.
