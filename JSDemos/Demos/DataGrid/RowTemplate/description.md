**DataGrid** supports row templates. Use the [rowTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate) ([rowRender](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowRender) in React) option to configure a template. For this, do the following:

* Declare table markup in a `<tbody>` element with the `dx-row` class. In AngularJS and Knockout, use a `<table>` element.

* Implement the following features manually: editing, adaptability, multiple selection, and master-detail interface.

* Disable column reordering, grouping, column fixing and command columns.

The standard template is dxTemplate. You can also use a [custom template](https://js.devexpress.com/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates).

In this demo, a custom row template is used to add employee images and extra information to regular grid rows.
