Use the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) function to customize DataGrid cell apperance in a PDF document. For example, you can change the text alignment and the background color of the cell. Use the following function parameters:

- gridCell     
Contains information about the DataGrid cell.
- pdfCell     
Specifies DataGrid cell appearance after export.

The code of this demo uses the **customizeCell** function to change the background color and font weight of cells with the "group" [rowType](/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType) and the font style of cells with "totalFooter" **rowType**.

The [customDrawCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customDrawCell) function allows you to cancel default cell painting in a PDF document. You can call this function to custom paint DataGrid cells. It accepts object with the following fields:

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

This demo uses the **customDrawCell** function to repaint the "Website" column content.

If you use the **customizeCell** function and the properties that you specify affect the size of the cell, the export system changes the size automatically. If you use the **customDrawCell** function, the export system fixes the sizes of the cells and you cannot affect them.