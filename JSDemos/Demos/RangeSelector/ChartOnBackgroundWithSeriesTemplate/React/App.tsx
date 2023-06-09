import React from 'react';
import RangeSelector, {
  Margin, Chart, CommonSeriesSettings, SeriesTemplate, Scale, Label, Format,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Year Period"
      dataSource={dataSource}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart>
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="year" valueField="oil" type="spline" />
        // @ts-expect-error TS(2786): 'SeriesTemplate' cannot be used as a JSX component... Remove this comment to see the full error message
        <SeriesTemplate customizeSeries={customizeSeries} nameField="country" />
      </Chart>
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label>
          // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
          <Format type="decimal" />
        </Label>
      </Scale>
    </RangeSelector>
  );
}

function customizeSeries(valueFromNameField) {
  return valueFromNameField === 'USA' ? {
    color: 'red',
  } : {};
}

export default App;
