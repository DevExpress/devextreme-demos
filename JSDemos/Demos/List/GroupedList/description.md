**List** can display items as a two-level hierarchy - parent and child items. To group items, set the [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property to **true** and make sure that the data source defines the hierarchy in one of the following ways. 

- The **List** data passed to the **dataSource** is structured so that each group is an object that contains two fields: **key** and **items**. The **key** field represents a group header, and the **items** field represents an array of group items.

    In cases when the data source doesn't conform to the structure specified above, use the [DataSource](https://js.devexpress.com/Documentation/ApiReference/Data_Layer/DataSource/)'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to define the data field to group against. If data objects are grouped but use other field names, implement the DataSource's [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function to create **key** + **items** field mappings. Refer to the following help topic for more information: [Item Mapping](/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping).

- The [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property is set to **true**.    

If you need to make the groups collapsible, set the [collapsibleGroups](/Documentation/ApiReference/UI_Components/dxList/Configuration/#collapsibleGroups) to **true**. 

You can also customize the look of group headers. To do so, use the [groupTemplate](/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate) property.
