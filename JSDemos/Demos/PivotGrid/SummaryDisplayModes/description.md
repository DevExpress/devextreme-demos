Summaries are values displayed in pivot grid cells. You can configure summaries in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) that belong to the *"data"* area (`Relative Sales` in this demo). 

## Available Summary Display Modes
You can specify a post-processing function to modify summaries after they are calculated. Use the [summaryDisplayMode](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) property to specify how to display summaries. This property allows you select one of the predefined summary display modes. To implement a custom mode, use the [calculateSummaryValue](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue) property. Note that you cannot use predefined and custom modes simultaneously. 

The list below shows available predefined modes. These modes calculate summaries depending on previous row values or totals:

- *"absoluteVariation"*
- *"percentVariation"*
- *"percentOfColumnTotal"*
- *"percentOfRowTotal"*
- *"percentOfColumnGrandTotal"*
- *"percentOfRowGrandTotal"*
- *"percentOfGrandTotal"*

Refer to the [description](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) of the **summaryDisplayMode** property to find out more about each mode.

## Change the Summary Display Mode at Runtime
This demo shows how to switch between the above mentioned modes. Right-click or long-tap the 'Relative Sales' button in the [field panel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/FieldPanel) to invoke the context menu. In this demo, the [onContextMenuPreparing](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onContextMenuPreparing) handler is used to specify the context menu content. This handler modifies fields from the **PivotGridDataSource**.**fields[]** array and changes their display [format](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format). 