import React from 'react';
import RangeSelector, {
  Margin, Chart, CommonSeriesSettings, Series, Scale, TickInterval, MinorTickInterval, SliderMarker,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

const defaultValue = ['2013/03/01', '2013/03/07'];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      dataSource={dataSource}
      title="Select a Month Period"
      defaultValue={defaultValue}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart>
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings type="steparea" argumentField="date" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="dayT" color="yellow" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="nightT" />
      </Chart>
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale valueType="datetime">
        // @ts-expect-error TS(2786): 'TickInterval' cannot be used as a JSX component.
        <TickInterval days={2} />
        // @ts-expect-error TS(2786): 'MinorTickInterval' cannot be used as a JSX compon... Remove this comment to see the full error message
        <MinorTickInterval days={1} />
      </Scale>
      // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
      <SliderMarker format="day" />
    </RangeSelector>
  );
}

export default App;
