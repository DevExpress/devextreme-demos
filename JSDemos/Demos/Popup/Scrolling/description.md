This demo shows two implementations of scrolling in the Popup component.

When you click the first **Show Popup** button, the Popup with a native scrollbar appears. The component always displays a native scrollbar when Popup content's height is greater than Popup height.

A click on the second **Show Popup** button also displays a Popup with a scrollbar, but this scrollbar belongs to the [ScrollView](/Documentation/ApiReference/UI_Components/dxScrollView/) component. This implementation is more flexible. For example, you can enable [right-to-left representation](/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#rtlEnabled) or scroll the content to a [specific position](/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollTotargetLocation). To learn about all available options, refer to the [ScrollView API section](/Documentation/ApiReference/UI_Components/dxScrollView/).

To implement the second solution, follow the steps below:

1. Wrap the content in the ScrollView component and place it in the Popup container.

2. Set the [height](/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#width) of the ScrollView to `100%` of the popup content area.