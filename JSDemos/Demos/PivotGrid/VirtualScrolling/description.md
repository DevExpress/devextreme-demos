If the PivotGrid is bound to a large dataset, you can enable the virtual scroll mode to load only the cells that are in the viewport. This allows you to optimize data load time and reduces resources consumption. When users scroll the PivotGrid, it loads cells to be displayed in the viewport and removes other cells from memory.

To allow users to scroll the PivotGrid virtually, set the scrolling.[mode](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/scrolling/#mode) to "virtual".

In this demo, the PivotGrid contains approximately 4000 cells. To see virtual scrolling in action, scroll the PivotGrid horizontally.

This demo shows the PivotGrid bound to the local storage. To see virtual scrolling when cells display data from a server, refer to the [Remote Virtual Scrolling](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/RemoteVirtualScrolling) demo.