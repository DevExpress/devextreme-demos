Our DataGrid widget allows you to group multiple columns under higher-level headers to create a multi-level header hierarchy. This demo shows an example - see the "Nominal GDP" parent header and its children.

You can drag a parent header to reorder multiple columns at once. You can also drag it between the column chooser and a grid to display or hide all corresponding columns. Child columns also remain interactive.

To create Multi-Level Headers (Bands), use any of the following methods:

- Assign a hierarchical structure to the columns option. See the code in this demo for an example.
- Implement the customizeColumns function and specify the parent and child columns with the isBand and ownerBand options. See the isBand description for a code sample.
