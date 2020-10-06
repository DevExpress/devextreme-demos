**Scheduler**'s virtual scrolling significantly increases performance because the widget renders only visible appointments and removes them from the DOM once they leave the viewport. This mode should be used when the number of appointments is large.

To enable the virtual scrolling mode, add the [scrolling](/Documentation/20_2/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling) option and set its [mode](/Documentation/20_2/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling/#mode) to *"virtual"*.
