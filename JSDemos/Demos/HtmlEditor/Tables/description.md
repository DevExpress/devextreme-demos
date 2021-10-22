DevExtreme HTML/Markdown Editor allows its users to work with tables. This demo illustrates table resize support and table management with the toolbar, context menu, and from code.

## Manage Tables with the Toolbar

To allow users to manage tables with the [toolbar](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/), add the following [items](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/) to it:

- *"insertTable"* / *"deleteTable"* - Manage a table
- *"insertRowAbove"* / *"insertRowBelow"* / *"deleteRow"* - Manage rows
- *"insertColumnLeft"* / *"insertColumnRight"* / *"deleteColumn"* - Manage columns
- *"tableProperties"* / *"cellProperties"* - Open a pop-up window with table or cell customization options

## Manage Tables with the Context Menu

To enable table management with the context menu, set the [tableContextMenu](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableContextMenu/).[enabled](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableContextMenu/#enabled) property to **true**. In this demo, you can click the Enable Table Context Menu check box under the HtmlEditor to enable or disable the property. When it is enabled, right-click a table cell to open the context menu.

[note] The context menu cannot be used to create new tables because it is only active within table boundaries. If you want users to create tables, make sure to add the *"insertTable"* item to the toolbar.

If you need to customize menu commands, override the **tableContextMenu**.[items](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableContextMenu/items/) array. Refer to its description for a code example.

## Manage Tables Programmatically

You can initiate table-related actions from code. Use the [getModules](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#getModulemoduleName) method to access the Table module. This module contains methods whose names match the toolbar item names listed above. Refer to the following topic for the complete method list and code examples: <a href="https://github.com/DevExpress/devextreme-quill/blob/master/docs/modules/table.md" target="_blank">DevExtreme Quill modules: Table</a>.

## Resize Tables

If users should be able to resize table rows and columns, set the [tableResizing](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableResizing/).[enabled](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableResizing/#enabled) property to **true**. In this demo, you can use the Allow Table Resizing check box to change the property value.

You can also set the **tableResizing**.[minColumnWidth](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableResizing/#minColumnWidth) and **tableResizing**.[minRowHeight](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableResizing/#minRowHeight) properties to limit minimum column width and row height. If you do not specify these properties, the width and height are limited by the cell content. You can see this behavior in this demo when you reduce column width or row height to small values.