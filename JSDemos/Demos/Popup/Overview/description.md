The **Popup** UI component is a pop-up window that overlays the current view and displays specified content.

This demo illustrates the following **Popup** use cases:    

- **Specify the content**       
Use the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate) property to set the **Popup** content.     

- **Set the title**   
Use the [showTitle](Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) property to show or hide the **Popup** title. If the **showTitle** value is set to **true**, define the **Popup** title within the [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) property.         

- **Show and hide the Popup**   
Call the [show()](/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#show) or [hide()](/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#hide) method. If the **Popup** should be hidden on clicks outside its bounds, enable the [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick) property. 