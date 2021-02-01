The **List** supports three search modes: *"contains"*, *"startswith"*, and *"equals"*. This demo illustrates the use of *"contains"* and *"startswith"* modes. To see them in action, select the respective search mode from the "search mode" dropdown menu in the "Options" section and type a name in the search bar a the top of the **List**.

When the *"contains"* mode is selected, the **List** displays only the items that contain a string entered in the search bar.

With the *"startswith"* mode selected, the **List** only displays the items that start with a string entered in the search bar.

To add a search bar to the **List** and enable the search functionality, do the following:

- set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to *true*.   

- pass the name of a search mode to the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode).   

- configure the [searchExpr](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property. It is used to compare the search string against a specific field in your **dataSource** object. In this example, the search string is compared against the *"Name"* field. This is why the **searchExpr** is set to *"Name"*.
