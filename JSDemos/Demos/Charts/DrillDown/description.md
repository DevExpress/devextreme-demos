When the data source has several hierarchical levels, you may want to enable users to navigate between them. The movement from the higher to the lower hierarchical level is called *"drilling down"*. The movement backwards is called *"drilling up"*.

In this demo, when a user clicks a group of tiles in the TreeMap, the component drills down. To implement this technique, follow the steps below:

1. Set the [interactWithGroup](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#interactWithGroup) property to `true` to enable users to click on groups of items.

2. Call the [node](/Documentation/ApiReference/UI_Components/dxTreeMap/Node/).[drillDown](/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#drillDown) method in the TreeMap [onClick](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onClick) handler.

3. To be able to get back to another level, you need to create a clickable UI component or a link. This demo generates links in the markup in the [onDrill](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onDrill) handler that also call the [node](/Documentation/ApiReference/UI_Components/dxTreeMap/Node/).[drillDown](/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#drillDown) method on click. Inspect the code below for the implementation details.