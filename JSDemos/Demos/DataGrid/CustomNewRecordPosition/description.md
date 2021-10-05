The DataGrid API includes the [newRowPosition](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#newRowPosition) property that allows you to set one of the following predefined new record positions:

- *"viewportTop"* (default)           
Insert a new row at the top of the viewport.

- *"viewportBottom"*          
Insert a new row at the bottom of the viewport.

- *"pageTop"*         
Insert a new row at the top of the current page.

- *"pageBottom"*        
Insert a new row at the bottom of the current page.

- *"first"*           
Navigate to the beginning of the dataset and insert a new row at the top.

- *"last"*            
Navigate to the end of the dataset and insert a new row at the bottom.

In this demo, you can use a drop-down menu to change the **newRowPosition** property value at runtime. This demo also allows you to select different scrolling modes and see how the **newRowPosition** property works with them.

If you want to position new records with more flexibility, you can specify a key before/after which a new record should be inserted. To do this, set the [insertBeforeKey](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/changes/#insertBeforeKey) or [insertAfterKey](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/changes/#insertAfterKey) property in the array of pending [changes](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/changes/). In this demo, each row contains an "Add row" button that inserts a new row after the current row. The **insertAfterKey** property is used to implement this functionality. Review the button's **onClick** event handler for more information.