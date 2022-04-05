Use the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) function to customize DataGrid cell apperance in a PDF document. For example, you can change the text alignment and the background color of the cell. Use the following function parameters:

- gridCell     
Contains information about the DataGrid cell.
- pdfCell     
Specifies DataGrid cell appearance after export.

In this demo, the **customizeCell** function changes the background color and font weight of group row cells and the font style of footer cells.

The [customDrawCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customDrawCell) function allows you to cancel default cell painting in a PDF document. You can call this function to custom paint DataGrid cells. It accepts an object with the following fields:

- doc    
Instance of the [jsPDFDocument](/api-reference/50%20Common/Object%20Structures/PdfExportDataGridProps/jsPDFDocument.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#jsPDFDocument').
- rect    
Object that contains information about the location of the cell and its dimensions.
- gridCell    
Contains information about the DataGrid cell.   
- pdfCell    
Specifies DataGrid cell appeareance after export.
- cancel   
Allows you to prevent default painting logic.

In this demo, the **customDrawCell** function repaints the "Website" column content.