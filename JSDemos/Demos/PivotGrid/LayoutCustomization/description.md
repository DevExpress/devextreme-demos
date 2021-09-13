PivotGrid allows you to customize layout and orientation of elements that annotate data. These elements are called [headers](/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers). They can be of one of the following types: row, column, or data. Use the following properties to configure header settings: 

- [rowHeaderLayout](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#rowHeaderLayout)            
Allows you to specify layout type for the row header items. The *"standard"* layout displays child items on the right from the parent items. Assign "*tree*" to this property to display items more compactly as a hierarchical structure. 

- [dataFieldArea](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataFieldArea)     
Specifies the [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) to which data headers belong: *"column"* or *"row"*. Data headers appear only when pivot grid has more than one data field (`Sales` and `Percent` in this demo). 

You can change position of total rows and columns. The PivotGrid displays them after data. Use the [showTotalsPrior](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showTotalsPrior) property to specify whether to show the totals after data. This property does not affect row totals when **rowHeaderLayout** is *"tree"*.

Toggle the check boxes below the PivotGrid to change values of the **showTotalsPrior**, **dataFieldArea**, and **rowHeaderLayout** properties.