The **Chart** widget can aggregate series points. To enable this feature, set the **aggregation**.[enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#enabled) option of a [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) to **true**. 

In this demo, the **Chart** is bound to the [RangeSelector](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/) component. When you narrow down the selection range, the chart zooms in, and the series points become less aggregated. The converse is also true: when the selected range is wider, the degree of aggregation is higher.

Aggregation on zoom is only one use case for this feature. Refer to the [aggregation](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/) description for information on how to configure aggregation for other use cases.
