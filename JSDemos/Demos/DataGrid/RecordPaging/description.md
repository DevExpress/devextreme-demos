The DataGrid splits records into multiple pages. This technique helps optimize control performance: the client only needs to load and render one page at a time. Users can use a scroll bar or a pager to navigate between pages. This demo shows how to enable and customize the pager.

The [pager](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/) object is used to configure the pager. It has the full and compact display modes. Additionally, the adaptive (default) mode switches between these two values based on the DataGrid's width. Use the **pager**.[displayMode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/#displayMode) property to specify the mode. 

The pager contains the following elements:

- **Page navigator**        
Enables page navigation.

- **Page size selector**        
Changes the page size. To display this element, enable the [showPageSizeSelector](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/#showPageSizeSelector) property. You can also define the [allowedPageSizes](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/#allowedPageSizes) and specify the initial [pageSize](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#pageSize) in the [paging](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/) object.

- **Page information**           
Displays the current page number and total record count. Available only in the full mode. To display page information, enable the [showInfo](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/#showInfo) property. You can also use the [infoText](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/pager/#infoText) property to customize the information text string.

In this demo, you can use the SelectBox to switch between the display modes and see how the page navigator and page size selector change their appearance accordingly. You can also use the checkboxes to show or hide the page size selector and - if in the full display mode - page information and buttons in the page navigator.