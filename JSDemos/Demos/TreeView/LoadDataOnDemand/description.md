Use the [createChildren](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren) function to load data on demand and enhance performance on large datasets. Unlike virtual mode, this function allows you to use your own custom logic. 

To specify the function, pass the expanded node's identifier as an argument and process the returned value inside the function. This value can be an array of objects or a promise as in this demo. The following prerequisites should be met:

* Neither the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource), nor the items property should be specified.

* The dataset should have a plain structure and the [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure) property should be set to *"plain"*.

* The TreeView should not add the [search panel](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled) because the search is performed on loaded nodes and may produce incorrect results.
