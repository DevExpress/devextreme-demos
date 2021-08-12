A field panel is a component that displays pivot grid fields involved in summaries calculation. It consists of four field areas: column, row, data and filter. Field panel allows users to manage fields which makes this component similar to the [field chooser](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/IntegratedFieldChooser). You can use these components simultaneously as shown in this demo.

To configure a field panel, use the [fieldPanel](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel) object. Assign **true** to this object's [visible](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#visible) property to display the fields panel. The [allowFieldDragging](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#allowFieldDragging) property defines whether users can drag and drop fields in the field panel. The following properties specify the visibility of fields from various areas in the field panel:

- [showColumnFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showColumnFields)
- [showRowFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showRowFields)
- [showDataFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showDataFields)
- [showFilterFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showFilterFields)

Use the checkboxes below the pivot grid to show or hide the corresponding fields.

If the field panel is visible and the [allowSorting](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowSorting) and [allowFiltering](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowFiltering) properties are set to **true**, users can click icons to sort or filter pivot grid fields.

This demo also shows how to use the [onContextMenuPreparing](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onContextMenuPreparing) to manage fields displayed in the field panel at runtime. Invoke that menu to hide fields, change summary types, or display field chooser.