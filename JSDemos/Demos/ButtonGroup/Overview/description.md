ButtonGroup displays a set of toggleable buttons and allows users to select one or several of them. This demo illustrates how to configure the ButtonGroup: bind ButtonGroup to data, enable or disable multiple selection and customize the ButtonGroup appearance.

Use the [items]() array to populate ButtonGroup with data. You can specify the following fields in the data objects: [hint](), [icon](), [text](), [type]() and others.

Set the [keyExpr]() property to the data field that supplies keys used to distinguish between the selected buttons. In this demo, the [selectedItemKeys]() property contains the keys of the selected buttons and allows component to select buttons initially. To enable multiple selection, set the [selectionMode]() property to `multiple`.

Use [onItemClick]() function to process clicks on buttons.

Specify the [stylingMode]() property and select one of the three predefined styles. In this demo, ButtonGroups in the first row have the `outlined` style, while the others have the `text` style.

To get started with the DevExtreme ButtonGroup component, refer to the following tutorial for step-by-step instructions: [Getting Started with ButtonGroup](/Documentation/Guide/UI_Components/ButtonGroup/Getting_Started_with_ButtonGroup/).