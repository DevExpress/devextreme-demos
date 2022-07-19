The TreeMap component visualizes data as a set of rectangles (tiles). The tile size represents the data point value relative to other data points. 

The TreeMap works with collections of objects. If objects in your collection have a plain structure, the component visualizes them as tiles. If your data is hierarchical, the TreeMap displays it as a group of nested tiles.

To bind data to the component, pass the collection of objects to the TreeMap's [dataSource](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#dataSource) property. 

Once you assign the data source, specify the [valueField](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#valueField) and [labelField](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#labelField). If you specify these properties, the component can determine the object fields that indicate TreeMap labels and values in the collection. The default values for these properties are `value` and `name`, respectively.

If your data is hierarchical, you also need to specify the [childrenField](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#childrenField). The default value for the [childrenField](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#childrenField) is `items`. You can use these data field names to structure your collection as shown in this demo. 

For example, one of the objects in this demo data source looks as follows:

    {
        name: 'Australia',
        items: [{
            value: 4840600,
            name: 'Sydney',
            country: 'Australia',
        }, {
            value: 4440000,
            name: 'Melbourne',
            country: 'Australia',
        }],
    }

This object produces a tile with **Australia** label. The **Australia** tile has two nested tiles labeled **Sydney** and **Melbourne**.

To make TreeMap more informative, you can specify a [title](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/title/) and implement a [tooltip](/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tooltip/).

