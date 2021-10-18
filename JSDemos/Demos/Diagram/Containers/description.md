This demo shows the Diagram component's capability to wrap shapes into containers. A container is a special shape with the following features:

* a container can contain other shapes (including other containers), 
* a container is dragged with its content,
* a container can be collapsed with a collapse button.

To wrap a shape, just drop it into a container.

If you bind the Diagram to a data source, define the [containerKeyExpr](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#containerKeyExpr) property to store information about the parent container in the data source. Otherwise, this information will be lost. 