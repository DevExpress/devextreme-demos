This demo shows how to show and hide the Popup component, how to fill it with content, specify its position and other configurations. To get started with the DevExtreme Popup component, refer to the following tutorial for step-by-step instructions: [Getting Started with Popup](/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/).

## Show and Hide the Popup

Use two-way binding between the [visible](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible) property and a Boolean variable (`popupVisible` in this demo). The `showInfo(employee)` method sets `popupVisible` to `true` and the Popup appears. You can close the Popup in multiple ways:

- Built-in close button    
Enable the [showCloseButton](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showCloseButton) property to display the close button in the Popup's [title area](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle).

- Custom close button    
This demo shows how to add custom buttons to the Popup. One of them uses an [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) handler to set the `popupVisible` variable to `false`, and the Popup disappears. Refer to the next section (**Configure the Popup**) to learn how you can populate the popup with custom controls.

- On outside click    
Users can also hide the Popup on outside clicks, if you enable the [hideOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick) property.

## Configure the Popup

The Popup inner area is divided into two parts: title area and content area.

- Content area       
To populate the Popup with content, add markup inside the component. You can also enable a toolbar at the bottom of the content area. To do this, declare [toolbarItems](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) in the markup as shown in this demo. Set each item's [toolbar](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#toolbar) property to `bottom`. To learn more about toolbar configuration, refer to the following tutorial: [Getting Started with Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/)

- Title area       
Set [showTitle](Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle) to `true` and use the [title](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#title) property to specify the caption. You can also add a toolbar to the title area. Add [toolbarItems](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) markup and set each item's [toolbar](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#toolbar) property to `top`. If you want to display an item in the overflow menu, as shown in this demo, set the item's [locateInMenu](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#locateInMenu) to `always`.

## Resize and Position

To specify the Popup's size, use the [height](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width) properties.

In this demo, each Popup's location is relative to the image. The code sets the **my**, **at**, and **of** properties of the [position](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#position) object. The configuration in the demo reads as follows: "place **my** `center` side **at** the `bottom` side **of** the `#image${employee.ID}` element."

Use the [container](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#container) property to specify the container to render the Popup in. If you set the [container](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#container) property to a specific element on the page, the [shading](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#shading) applies to this element.

Enable the [dragEnabled](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#dragEnabled) property to allow users to move the Popup around the page.