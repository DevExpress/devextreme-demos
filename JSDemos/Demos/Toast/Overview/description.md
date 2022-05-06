The Toast is a UI component that provides pop-up notifications. 

When you need to display a notification, call the [notify(message, type, displayTime)](/Documentation/ApiReference/Common/Utils/ui/#notifymessage_type_displayTime) method with values for the [message](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#message), [type](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type) and [displayTime](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#displayTime) properties passed as the arguments.

You can specify one of the four predefined types of notifications, depending on the mood of the message:

- *'info'*   
Blue toast with a message bubble icon.

- *'warning'*   
Yellow toast with an exclamation mark icon.

- *'error'*   
Red toast with an **X** icon.

- *'success'*   
Green toast with a check mark icon.

In this demo, toggle the checkboxes to see the *'success'* and *'error'* types of notifications.

You can also customize the Toast appearance. Set the [type](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type) property to *'custom'* and use a [contentTemplate](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#contentTemplate). Refer to the following topic for more information: [Customize the Content](/Documentation/Guide/UI_Components/Toast/Customize_the_Content/).

If you need to specify other Toast properties besides [type](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type) and [displayTime](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#displayTime), call the [notify(options, type, displayTime)](/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_type_displayTime) method and pass an object as the argument. In this object, you can set any Toast property, such as [shading](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#shading), [position](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#position), [width](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#width), [height](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#height) and [others](/Documentation/ApiReference/UI_Components/dxToast/Configuration/).


