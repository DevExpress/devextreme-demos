You can apply a custom column template to modify an individual DataGrid column. For this, use the cellTemplate option. Furthermore, you can modify multiple columns at a time with the onCellPrepared function.

Apart from modifying a custom column with the cellTemplate option, you can change multiple columns at a time in the onCellPrepared function.

This demo implements these two concepts. Columns whose data objects have the diff field are changed in the onCellPrepared function. The Dynamics column uses a cellTemplate to display the Sparkline widget.

Note that onCellPrepared changes HTML layout. In this demo, this method is used only with jQuery, AngularJs, ASP.NET Core and ASP.NET MVC because these technologies allow this modification. The Angular, React and Vue frameworks use a custom column template instead.
