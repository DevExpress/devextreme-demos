**DataGrid** automatically adapts its layout to screens of different widths. Use buttons in the top right corner to switch between the mobile and tablet screens. If columns do not fit the chosen screen type, the widget hides them one by one from right to left. 

To enable this behavior in your application, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) option to **true**.

**DataGrid** displays hidden columns' data in the adaptive row as [Form](/Documentation/Guide/Widgets/Form/Overview/) items. You can use the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing) handler to access this data. Refer to the handler's description to see the limitations.