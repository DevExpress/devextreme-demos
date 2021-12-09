Autocomplete is a textbox that provides suggestions while a user types into it. This demo shows how you can customize the Autocomplete component and how to handle its value change.

## Bind Autocomplete to Data

You need to bind data to Autocomplete to configure the simplest version of this component. Use one of the following properties:

* items[]             
Accepts a local data array.

* dataSource            
Accepts a local data array, a DataSource object, or one of DevExtreme data stores. In this demo, every Autocomplete component is bound to a local array, except the "Custom Item Template and Data Source Usage" component that uses an ODataStore.

The value property stores the item that a user selected. You can use the same property to select an item programmatically, as shown in the "Disabled" Autocomplete component.

If the data source contains objects, you should set the valueExpr property. It accepts a data field name that uniquely identifies each data object. In this demo, valueExpr is set only for the "Custom Item Template and Data Source Usage" Autocomplete because others are bound to arrays of primitive values.

## Configure Search Parameters

Autocomplete starts providing suggestions once an end user types the first character. To increase the number of characters that triggers suggestions, use the minSearchLength property. You can also specify the time interval Autocomplete should wait before providing suggestions. Assign this time interval measured in milliseconds to the searchTimeout property. See the "With Custom Search Options" Autocomplete component for an example.

Usually, the data field that provides suggestions (valueExpr) is the same data field that is searched for the typed text. If in your case they are two different fields, assign the field providing suggestions to the valueExpr property and the field to be searched - to the searchExpr property. Note that searchExpr also accepts arrays in case you need several fields to search in.

## Handle Value Change

To handle value change, implement the onValueChanged function. In this demo, onValueChanged is used to display the values of all Autocomplete components.

## Appearance Customization

To customize the Autocomplete appearance, you can specify different properties:

* placeholder             
Sets a text string to be displayed when Autocomplete is empty. 

* showClearButton            
Adds a Clear button that empties the Autocomplete value as shown in the "With Clear Button" Autocomplete component. 

* disabled            
Disables the component.

* itemTemplate            
Customizes the appearance of the Autocomplete suggestions. See the "Custom Item Template and Data Source Usage" component for an example.

