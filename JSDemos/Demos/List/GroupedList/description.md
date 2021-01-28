It is possible to display the **List** in groups under the following conditions:

- The **List** data passed to the **dataSource** is structured so that each group is an object that contains two fields: **key** and **items**. The **key** field represents a group header, and the **items** field represents an array of group items. Refer to this [help guide](/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/) for more information on grouping in Data Source.   

In cases when the data source doesn't conform to the structure specified above, use the [DataSource](https://js.devexpress.com/Documentation/ApiReference/Data_Layer/DataSource/)'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to define the data field to group against. If data objects are grouped but use other field names, implement the DataSource's [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function to create **key** + **items** field mappings. Refer to this [help guide](/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) for more information on item mapping. 

- The [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property is set to *true*.    

If you need to make the groups collapsible, set the [collapsibleGroups](/Documentation/ApiReference/UI_Components/dxList/Configuration/#collapsibleGroups) to *true*. 

You can also [customize](/Documentation/Guide/UI_Components/List/Grouping/Customize_Group_Headers/) the look of group headers. To do so, use the [groupTemplate](/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate) property.