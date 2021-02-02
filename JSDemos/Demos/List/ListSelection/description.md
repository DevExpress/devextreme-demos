The **List** offers four selection modes: *none*, *all*, *single*, and *multi*. 

Selection is disabled by default. To enable it, pass one of the mentioned above values to the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property.

Users can click or tap on the **List** item to select it. Selected items become shaded. It is possible to add selection checkboxes or radio buttons to list items. To do so, set the [showSelectionControls](/Documentation/ApiReference/UI_Components/dxList/Configuration/#showSelectionControls) property to **true**. This property also must be set to *true* when you use the *all* selection mode.

When the **List** data is [paginated](/Documentation/Guide/UI_Components/List/Paging/), you can choose whether the "Select All" check box will select all items on all pages or only the items on the currently rendered pages. To configure this functionality, set the [selectAllMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectAllMode) property to *allPAges* or *page*.

To configure the initial selection, use the [selectedItemKeys](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectedItemKeys) property. The property accepts a array of item keys wrapped in quotation marks.

You can use the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged) property to perform an action when users select an item or items. In this demo, this property is used to display IDs of selected items.
