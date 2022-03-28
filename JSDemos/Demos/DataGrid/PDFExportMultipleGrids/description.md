This demo shows how to export multiple DataGrids into one PDF document. 

To implement this functionality, execute a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" target="_blank">chain of Promises</a>. Call the [exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions) methods in a chain one after another. Use the **jsPDF**.<a href="https://raw.githack.com/parallax/jsPDF/master/docs/jsPDF.html#addPage" target="_blank">addPage()</a> method to add a page in the PDF document.

This demo shows two DataGrids in different tabs. The export system arranges these DataGrids on different pages of the PDF document. This demo also uses the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#customizeCell) function to customize the appearance of the DataGrid cells. It sets alternating backgrounds for the rows.
