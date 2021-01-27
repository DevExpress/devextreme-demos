It is possible to display the **List** in groups under the following conditions:

- The **List** data passed to the **dataSource** is structured so that each group is an object that contains two fields: **key** and **items**. The **key** field represents a group header, and the **items** field represents an array of group items. Refer to this [help guide](/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/) for more information on grouping in Data Source.   

- The [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property is set to *true*.    

If you need to make the groups collapsible, set the [collapsibleGroups](/Documentation/ApiReference/UI_Components/dxList/Configuration/#collapsibleGroups) to *true*. 

You can also [customize](/Documentation/Guide/UI_Components/List/Grouping/Customize_Group_Headers/) the look of group headers. To do so, use the [groupTemplate](/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate) property.