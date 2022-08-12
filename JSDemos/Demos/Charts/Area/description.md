The Chart component can display various [series types](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type). This demo shows the following series types (use a drop-down editor below the Chart to select the type):

- *area*    
Area series visualize data as an area filled with color. If the Chart contains multiple area series, they overlap each other.

- *stackedarea*    
In stacked area series, the value of each next point is counted off from the previous point with the same argument. As a result, The Chart displays areas stacked on top of each other without overlapping. This type of Chart is useful when you need to show a ratio between different areas.

- *fullstackedarea*    
Full-stacked area series are stacked series, but the sum of all point values by a given argument is considered 100%, and each individual point value is recalculated to be a share of these 100%. The full-stacked area series fully cover the Chart's pane. 