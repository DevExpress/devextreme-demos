The **Popup** UI component is a pop-up window that overlays the current view and displays specified content.

This demo illustrates the following **Popup** use cases:    

- **Specify the content**       
Define the **Popup** content within the UI component's markup.   

- **Set the title**   
Use the [showTitle](Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) property to show or hide the **Popup** title. If the **showTitle** value is set to **true**, define the **Popup** title within the [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) property.         

- **Show and hide the Popup**   
Use two-way binding to define the [visible](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#visible) property and manipulate its value directly. If the **Popup** should be hidden on clicks outside its bounds, enable the [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick) property.