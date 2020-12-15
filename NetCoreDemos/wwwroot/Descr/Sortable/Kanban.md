The [Sortable](/Documentation/ApiReference/UI_Widgets/dxSortable/) component allows users to reorder elements using drag-and-drop. In this demo, two different **Sortable**s are used. You can identify them in the code by the `class` attribute:

- `sortable-lists`        
This **Sortable** allows users to reorder card lists. The component nests `<div>` elements that represent the lists. The [handle](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#handle) option specifies that lists can be dragged by their titles. To correctly animate items being reordered, **Sortable** requires the item orientation. The [itemOrientation](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#itemOrientation) option is set to *"horizontal"* because card lists are orientated horizontally.

- `sortable-cards`         
This **Sortable** allows users to reorder cards. The component nests `<div>` elements that represent all cards in a specific list. All **Sortable**s are added to the same [group](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group) to allow users to move cards between lists.

In addition to **Sortable**, this kanban board implementation uses the [ScrollView](/Demos/WidgetsGallery/Demo/ScrollView/Overview/) component. The component's instance with the `scrollable-board` class allows you to scroll the board left to right. The component's instance with the `scrollable-list` class makes lists scrollable.