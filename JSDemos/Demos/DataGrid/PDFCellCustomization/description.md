You can use the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) or [customDrawCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customDrawCell) function to customize the PDF cell appearance.

Use the **customizeCell** function to adjust DataGrid cell content in a PDF document. You can access and change the following attributes:

- gridCell     
Contains information about the DataGrid cell.
- pdfCell     
Specifies DataGrid cell content after export.

The code of this demo uses the **customizeCell** function to change the background color and font weight of cells with the "group" [rowType](/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType), the font style of "totalFooter" **rowType**.

The **customDrawCell** function allows you to prohibit default DataGrid cell painting in a PDF document. You can call this function to custom paint DataGrid cells. It accepts the object with following fields:

- doc    
Instance of the [jsPDFDocument](/api-reference/50%20Common/Object%20Structures/PdfExportDataGridProps/jsPDFDocument.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#jsPDFDocument').
- rect    
Object that contains information about the location of the cell and its dimensions.
- gridCell    
Contains information about the DataGrid cell.   
- pdfCell    
Specifies DataGrid cell content after export.
- cancel   
Allows you to prevent default painting logic.

This demo uses the **customDrawCell** function to repaint the "Website" column content.

If you use the **customizeCell** function and the properties that you specify affect the size of the cell, the component changes the size automatically. If you use the **customDrawCell** function, the component fixes the sizes of the cells and you cannot affect them.