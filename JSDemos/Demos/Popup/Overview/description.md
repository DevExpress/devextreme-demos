The [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) UI component is a pop-up window that overlays the current view and displays specified content. In this demo, the **Popup** content is dynamically set using using [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate) property.
This demo illustrates the following **Popup** settings:    

- **Specify the content**       
Define the **Popup** content by passing it to **contentTemplate** for **jQuery** and **ASP.NET**, or within the UI component's markup for **React**, **Angular**, and **Vue**.    

- **Set the title**   
Use [showTitle](Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) property to show or hide the **Popup** title. If the **showTitle** value is set to **true**, use [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) property to define the **Popup** title by passing a string.         

- **Show and hide the Popup**   
If you are using frameworks like **.NET** and **jQuery**, implement method [show()](/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#show) to show or hide the **Popup**. In cases when you are using **React**, **Angular** or **Vue**, set the initial **Popup** visibility by defining [visible](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#visible) property as **false** and manipulate its value directly. To allow hiding the **Popup** on clicks outside its bounds, use [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick) property. 
