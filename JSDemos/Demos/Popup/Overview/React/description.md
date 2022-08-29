This demo shows how to show and hide the Popup component, how to fill it with content, specify its position and other configurations. To get started with the DevExtreme Popup component, refer to the following tutorial for step-by-step instructions: [Getting Started with Popup](/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/).

## Show and Hide the Popup

Use two-way binding to define the [visible](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible) property and bind it to a boolean variable, `popupVisible` in this demo. The `showInfo(employee)` method assigns `true` to the `popupVisible` variable, and the Popup becomes visible. You can close the Popup in multiple ways:

- Built-in close button    
Enable the [showCloseButton](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showCloseButton) property to display the close button in the Popup's [title area](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle).

- Custom close button    
This demo shows how to add custom buttons to the Popup. One of them uses an [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) handler to set the `popupVisible` variable to `false`, and the Popup becomes invisible. To learn more, follow the **Configure the Popup** topic below.

- On outside click    
Users can also hide the Popup on outside clicks, if you enable the [hideOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick) property.

## Configure the Popup

The Popup inner area is divided into two parts: title area and content area.

- Content area       
To fill the Popup with content, put a markup inside the component. You can also specify a toolbar at the bottom of the content area. To do this, declare the [toolbarItems](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) in the markup as shown in this demo. Set each item's [toolbar](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#toolbar) property to `bottom`. To learn more about toolbar configuration, refer to the following tutorial: [Getting Started with Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/)

- Title area       
Set [showTitle](Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle) to `true` and use the [title](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#title) property to specify the caption. You can also add a toolbar in the title area. Set each [toolbarItems](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) item's [toolbar](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#toolbar) property to `top`. If you want to add an item to the overflow menu as shown in this demo, set its [locateInMenu](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#locateInMenu) to `always`.

## Resize and Position

To specify the Popup's size, use the [height](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width) properties.

In this demo, each Popup's position depends on the image. To position the Popup, specify the **my**, **at**, and **of** properties of the [position](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#position) object. The configuration in the demo reads as follows: "place **my** `center` side **at** the `bottom` side **of** the `#image${employee.ID}` element."

Use the [container](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#container) property to specify the container to render the Popup in. If you set the [container](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#container) property to a specific element on the page, the [shading](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#shading) applies to this element.

Enable the [dragEnabled](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#dragEnabled) property to allow users to move the Popup around the page.