This demo shows how to create and configure a standard bar series type. Bar series visualize data as a collection of bars. 

First, bind the bar chart to one of the following data sources: 

* [Simple Array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/)
* [JSON Data](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)
* [OData Service](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)
* [Custom Sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

In this demo, the Bar chart is populated with data taken from a simple JavaScript array.

Then, create a single series. Assign an object that defines the series to the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/) configuration object. In the series' object, specify data source fields, the bar series type using the series[].[type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type) property, and other properties. 

To show several series, specify series as an array of objects defining series. See the [Series Overview](/Documentation/Guide/UI_Components/Chart/Series/Overview/) topic for details.