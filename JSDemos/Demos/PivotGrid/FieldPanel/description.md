The PivotGrid allows its users to&nbsp;sort and filter data, or&nbsp;manage the collection of&nbsp;fields at&nbsp;runtime. All these operations can be&nbsp;performed using the field panel located at&nbsp;the top of&nbsp;the component. Click the sorting or&nbsp;filtering icon of&nbsp;one of&nbsp;the fields to&nbsp;sort or&nbsp;filter data by&nbsp;this field. Right-click the &laquo;Sales&raquo; field and select an&nbsp;item from the appeared context menu to&nbsp;change the summary type. Drag and drop the fields to&nbsp;rearrange them.

A field panel is a component that displays unique pivot grid fields. Field panel allows users to manage fields at runtime which makes this component similar to the [field chooser](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/IntegratedFieldChooser).

To configure a field panel, use the [fieldPanel](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel) object. Assign **true** to this object's [visible](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#visible) property to display the fields panel. The [allowFieldDragging](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#allowFieldDragging) property defines whether users can drag and drop fields in the field panel. The following properties specify the visibility of fields from various areas in the field panel:

- [showColumnFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showColumnFields)
- [showRowFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showRowFields)
- [showDataFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showDataFields)
- [showFilterFields](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#showFilterFields)

Use the checkboxes below the pivot grid to change the values of these properties.

If the field panel is visible and the [allowSorting](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowSorting) and [allowFiltering](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowFiltering) properties are set to **true**, users can click icons to sort or filter pivot grid fields.

This demo also shows how to use the [onContextMenuPreparing](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onContextMenuPreparing) to manage fields displayed in the field panel at runtime. Invoke that menu to hide fields, change summary types, or display field chooser.