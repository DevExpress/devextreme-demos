import React from 'react';
import RangeSelector, {
  Margin, Chart, CommonSeriesSettings, Series, Scale,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

const defaultValue = ['1', '2'];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Product Weight"
      dataSource={dataSource}
      defaultValue={defaultValue}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart>
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings type="spline" argumentField="weight" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="appleCost" color="#00ff00" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="orangeCost" color="#ffa500" />
      </Chart>
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale valueType="numeric" />
    </RangeSelector>
  );
}

export default App;
