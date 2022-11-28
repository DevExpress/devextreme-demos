With the Chart component, you can display charts with multiple axes for better data visualization. For example, in a single-axis chart, you have to choose which values to indicate - absolute or percentage. With a multi-axis chart, you can indicate both absolute and percentage values on two separate axes, as you can see in this demo.

To configure a multi-axis chart, follow the steps below:

1. Create and name value axes.
Declare multiple objects in the [valueAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/) array. Each object configures a value axis. Every value axis should have a unique [name](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#name).

2. Bind series to value axes.        
Assign the name of an axis to the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/).[axis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#axis) property. If leave the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/).[axis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#axis) property unspecified, the series is bound to the axis declared first in the [valueAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/) array.

In this demo, the first axis is declared without a [name](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#name) and is bound to the first series. The [name](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#name) of the second axis is `total` and it is bound to the spline series. The [position](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#position) of the second axis is `right`.
