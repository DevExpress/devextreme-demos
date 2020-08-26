**DataGrid** automatically adapts its layout to screens of different widths. In this demo, you can switch between horizontal and vertical screen orientations. If columns do not fit the chosen orientation, the widget hides them one by one, starting with the rightmost column. Information from the hidden columns is still available in adaptive detail rows.

To enable this behavior in your application, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) option to **true**.

**DataGrid** displays hidden columns' data in the adaptive row as [Form](/Documentation/Guide/Widgets/Form/Overview/) items. You can use the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing) handler to access this data. Refer to the handler's description to see the limitations.
