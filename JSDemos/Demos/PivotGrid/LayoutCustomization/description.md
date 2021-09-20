PivotGrid allows you to customize its layout. This demo illustrates the following properties:

- [rowHeaderLayout](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#rowHeaderLayout)            
Allows you to specify layout type for the row header items. The *"standard"* layout displays child items on the right from the parent items. Assign "*tree*" to this property to display items more compactly as a hierarchical structure. 

- [showTotalsPrior](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showTotalsPrior)        
Specifies whether to show the total rows and columns before or after data. Applies only if **rowHeaderLayout** is *"standard"*.

- [dataFieldArea](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataFieldArea)     
Specifies the [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) to which data headers belong: *"column"* or *"row"*. Data headers appear only when the pivot grid has more than one data field (`Sales` and `Percent` in this demo). 

Toggle the check boxes below the PivotGrid to change values of the **showTotalsPrior**, **dataFieldArea**, and **rowHeaderLayout** properties.
