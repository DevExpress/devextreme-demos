Summary display modes are post-processing functions that allow you perform additional calculations on each summary value and take into account neighboring summary values. You can use summary display modes to present pivot data from different angles.

## Apply a Summary Display Mode
DevExtreme PivotGrid supports predefined summary display modes decribed below. To apply one of them, set the [summaryDisplayMode](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) property. 

.. copy the list from the reference article ...

If the predefined modes do not suit your needs, you can implement a custom post-processing function&mdash;[calculateSummaryValue](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue). Note that the PivotGrid ignores the **summaryDisplayMode** property if the **calculateSummaryValue** function is defined.

## Change the Summary Display Mode at Runtime
In this demo, you can switch between predefined summary display modes at runtime. Right-click or long-tap the Relative Sales field in the [field panel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/FieldPanel) and select a mode from the appeared context menu.

To implement this functionality in your application, use the [onContextMenuPreparing](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onContextMenuPreparing) event handler. Within this handler, you should detect the right-clicked field. If it is a target field, change its **summaryDisplayMode** and optionally other properties, such as [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption) or [format](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format).