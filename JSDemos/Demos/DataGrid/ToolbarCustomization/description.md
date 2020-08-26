Toolbar provides additional control elements. To add and customize the toolbar, implement the onToolbarPreparing option. You can configure an existent element or add a DevExtreme or custom widget in this function. For this, manipulate the toolbarOptions.items array located in the parameter object.

In this demo, the following elements are added to the toolbar inside the onToolbarPreparing function:

* Button widget to collapse/expand data groups; it uses the **option** method of DataGrid API to set value for the grouping.autoExpandAll option

* Button widget to refresh grid data; this element uses the **refresh** method of DataGrid API

* SelectBox to specify whether to group by State ot Employee

* Custom HTML element to display the number of data groups.

The toolbar also consists of the Column Chooser button. To enable this element, add the columnChooser object to the DataGrid and set its enabled option to true.
