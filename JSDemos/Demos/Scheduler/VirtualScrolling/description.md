**Scheduler**'s virtual scrolling significantly increases performance because the widget renders only visible appointments and removes them from the DOM once they leave the viewport. This mode should be used when the number of appointments is large. The supported views are *"day"*, *"week"*, and *"workWeek"*.

To enable the virtual scrolling mode, add the [scrolling](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling) option and set its [mode](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling/#mode) to *"virtual"* as done in this demo.
