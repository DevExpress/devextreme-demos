In some scenarios, you need to add more series to the data source after you created the Chart. In this case, organize your data source structure as follows:

    [
        {seriesName: series1, arg: arg11Value, val: value11 }
        {seriesName: series1, arg: arg12Value, val: value12 }
        ...
        {seriesName: seriesM, arg: argM1Value, val: valueM1 }
        {seriesName: seriesM, arg: argM2Value, val: valueM2 }
        ...
    ]

Each object in the data source must represent a point in a single series.

This demo uses the structure displayed above to organize the data:

    {
        year: 1970,
        country: 'Saudi Arabia',
        oil: 192.2,
    }

To define series, use the [commonSeriesSettings]() object to specify common settings for all series: the [argumentField](), the [valueField]() and the Chart [type]().

Then, use the [seriesTemplate]() configuration object to define a template for the series. Within this object, assign the data source field that specifies the series name to the [nameField]() property.

If you need to specify individual values for properties of a particular series, assign a callback function to the [customizeSeries]() property of the [seriesTemplate]() object. This demo uses the [customizeSeries]() function to display a line instead of a bar for the `year: 2009`.