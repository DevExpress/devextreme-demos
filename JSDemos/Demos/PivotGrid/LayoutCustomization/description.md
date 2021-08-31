PivotGrid allows users to customize layout and orientation of elements that annotate data. These elements are called [headers](/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers). They can be row, column, or data headers. You can customize row and data headers. Use the following properties to configure headers: 

- [rowHeaderLayout](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#rowHeaderLayout)            
Allows you to specify layout type for the row header items. The *"standard"* layout displays child items on the left from the parent items. Assign "*tree*" to this property to display items more compactly as a hierarchical structure. 

- [showTotalsPrior](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showTotalsPrior)        
Specifies whether to show the total rows and columns before or after data. Applies only if **rowHeaderLayout** is *"standard"*.

- [dataFieldArea](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataFieldArea)     
Specifies the [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) to which data headers belong. This area can be *"column"* or *"row"*. Data headers appear only when pivot grid has more than one data field (`Sales` and `Percent` in this demo). 

- [wordWrapEnabled](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#wordWrapEnabled)       
Specifies whether to wrap long text in header items.

Toggle the check boxes below the PivotGrid to change values of the **showTotalsPrior**, **dataFieldArea**, and **rowHeaderLayout** properties.