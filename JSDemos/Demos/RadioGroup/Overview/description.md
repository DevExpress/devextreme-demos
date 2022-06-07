The RadioGroup component contains a set of radio buttons and allows users to make a single selection from the set. This demo illustrates how to bind component to data, change the component layout, define a custom template, and handle the value change event.

## Bind RadioGroup to Data

You can display RadioGroup items from the [items]() array or a [dataSource](). If your data is an array of objects, use the [displayExpr]() and the [valueExpr]() properties. [displayExpr]() specifies a data source field that supplies texts for buttons. [valueExpr]() specifies a data source field that supplies values to the value property when users select a button. Leave [valueExpr]() unspecified if you need to supply the entire data object to the value property.

## Configure the Layout

The RadioGroup supports horizontal (default for tablets) and vertical (default for other devices) layouts. To change the layout for all types of devices, specify the [layout]() property.

## Customize Item Appearance

## Handle the Value Change 

