Use the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) or [customDrawCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customDrawCell) function to customize the PDF cell appearance.

The **customizeCell** function allows you to modify the PDF cell appearence programmatically. You can access and change the following attributes:

- gridCell     
A DataGrid cell.
- pdfCell     
An exporting PDF cell.

For example, this demo changes the background color and font weight for cells with the "group" [rowType](/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType). This demo also changes the font style of "totalFooter" **rowType** and converts phone numbers from one view to another.

The **customDrawCell** function allows you to manually change the content and appearance of the PDF cell. This function accepts the object with following fields:

- doc    
Instance of the [jsPDFDocument](/api-reference/50%20Common/Object%20Structures/PdfExportDataGridProps/jsPDFDocument.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#jsPDFDocument') used for export.
- rect    
Object that contains information about the location of the cell and its dimensions.
- gridCell    
A DataGrid cell.   
- pdfCell    
An exporting PDF cell.
- cancel   
Allows you to prevent default drawing logic.

This demo changes the "Website" column content text appearance and placement.

If you use the **customizeCell** function and the properties that you specify affect the size of the cell, the component changes the size automatically. If you use the **customDrawCell** function, the component fixes the sizes of the cells and you cannot affect them.


