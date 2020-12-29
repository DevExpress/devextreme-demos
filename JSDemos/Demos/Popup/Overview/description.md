The [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) UI component is a pop-up window that overlays the current view and displays specified content. In this demo, the **Popup** content is dynamically set using using [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate) property.
This demo illustrates the following **Popup** settings:    

-**title**
Use [showTitle](Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) property to show or hide the **Popup** title. If the **showTitle** value is set to **true**, use [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) property to define the **Popup** title by passing a string.    

-**drag the Popup**
[dragEnabled](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#dragEnabled) property allows users to drag by clicking on its title.     

-**close the Popup**
To allow closing the **Popup** on clicks outside its bounds, use [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick) property.     

-**show the Popup**
Set the initial **Popup** visibility by defining [visible](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#visible) property as **false**. If you are using frameworks like **.NET** and **jQuery**, implement method [show()](/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#show) to show or hide the **Popup**. In cases when you are using **React**, **Angular** or **Vue**, manipulate the value of **visible** property directly.
