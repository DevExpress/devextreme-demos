To display drop-down items grouped by category, you can use a data source of a plain or grouped structure. 

# Grouped Data Source
The grouped data array should contain objects with the **key** (category) and **items** fields; the **items** array can include primitives or objects:

    let dataSource = [{
        key: "Group 1", // Group caption 
        items: [ // Items in Group 1
            { /* ... */ },
            { /* ... */ }
        ]
    }, {
        key: "Group 2",
        items: [
            { /* ... */ },
            { /* ... */ }
        ]
    }];

If fields use different names, implement the DataSource's [map](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map) function to create **key** + **items** field mappings as done in this demo's second SelectBox.

# Plain Data Source
If the data source provides ungrouped data objects, use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).[group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify the data field to group by. This case is illustrated in the first and third SelectBoxes of this demo. If the data source contains primitives, do not specify the **DataSource**.**group** property.

Regardless of the data source structure, enable the [grouped](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#grouped) property.

If the data source contains objects, specify the following SelectBox properties:

* [valueExpr](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#valueExpr)
A data field that contains unique values used to identify items. As an alternative, you can set the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).[store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/).[key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) property.

* [displayExpr](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#displayExpr)
A data field whose values should be displayed in the drop-down list.

Additionally, you can use the [groupTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#groupTemplate) property to specify a custom template for group captions. In this demo, each caption displays an icon and a text.

[note]Only one-level grouping is supported.