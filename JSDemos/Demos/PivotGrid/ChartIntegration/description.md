PivotGrid allows you to integrate the [Chart](/Documentation/ApiReference/UI_Components/dxChart/) component to visualize data. Use the [bindChart(chart, integrationOptions)](/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions) method to bind these two components. The Chart displays data from the PivotGrid's lowest expanded level. You can bind the PivotGrid only to the already existing Chart.

Do the following to configure components integration:

## Use Default Integration Options 
You can omit the second argument of the **bindChart(chart, integrationOptions)** when you bind a Chart to a PivotGrid. In this case, PivotGrid passes its data as is and the Chart diplays all data. Row field values form chart [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/), and column field values form [arguments](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/). Values of all data fields are displayed on a single [value axis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/). 

## Process Data and Customize the Chart
The second argument of the **bindChart(chart, integrationOptions)** method allows you to customize the chart. Use the fields of the **integrationOptions** object to configure chart's content, behavior, and appearance. Refer to this method's [description](/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions) to see the full list of fields. This demo sets the **alternateDataFields** field to **false** to group data field values in the chart's legend. **dataFieldsDisplayMode** is *"splitPanes"* to visualize valued from each data field on a separate chart [pane](/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/).

You can call the **bindChart(chart, integrationOptions)** method at any point of your application. In this demo, we call this method in the main function and use [instances](/Documentation/ApiReference/UI_Components/dxChart/Methods/#instance) to bind the components.

Refer to the following help topic to learn more about PivotGrid and Chart integration: [Integration with Chart](/Documentation/Guide/UI_Components/PivotGrid/Integration_with_Chart/#Customize_the_Chart/Customize_the_Series).
