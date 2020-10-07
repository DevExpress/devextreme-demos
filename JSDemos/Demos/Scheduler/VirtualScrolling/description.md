If a **Scheduler** is bound to a large data set, enable Virtual Scrolling to optimize the widget's performance. In this mode, the widget renders only visible appointments. When an appointment leaves the viewport, the **Scheduler** removes it from the DOM.

To enable the virtual scrolling mode, set the [scrolling](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling).[mode](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling/#mode) option to *"virtual"* as done in this demo.

Virtual scrolling is supported by the following [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/): *"day"*, *"week"*, and *"workWeek"*.
