import React from 'react';
import RangeSelector, {
  Margin, Scale, TickInterval, MinorTickInterval, Chart, Series, ValueAxis,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

const range = [new Date(2011, 11, 25), new Date(2012, 0, 1)];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Range in the Costs and Revenues History"
      dataSource={dataSource}
      defaultValue={range}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale>
        // @ts-expect-error TS(2786): 'TickInterval' cannot be used as a JSX component.
        <TickInterval days={7} />
        // @ts-expect-error TS(2786): 'MinorTickInterval' cannot be used as a JSX compon... Remove this comment to see the full error message
        <MinorTickInterval days={1} />
      </Scale>
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="t" valueField="costs" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="t" valueField="income" />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis min={0} />
      </Chart>
    </RangeSelector>
  );
}

export default App;
