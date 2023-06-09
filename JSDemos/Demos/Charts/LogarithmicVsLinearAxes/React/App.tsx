import React from 'react';
import {
  Chart,
  Pane,
  Series,
  CommonAxisSettings,
  ValueAxis,
  Tooltip,
  Crosshair,
  HorizontalLine,
  Label,
  Legend,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';

const crosshairFormat = {
  type: 'fixedPoint',
  precision: 2,
};

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={dataSource}
        title="Damped Sine Wave"
      >
        // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
        <Pane name="top" />
        // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
        <Pane name="bottom" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series pane="top" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series pane="bottom" />
        // @ts-expect-error TS(2786): 'CommonAxisSettings' cannot be used as a JSX compo... Remove this comment to see the full error message
        <CommonAxisSettings endOnTick={false} />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis title="Logarithmic Axis" linearThreshold={-3} type="logarithmic" pane="top" />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis title="Linear Axis" pane="bottom" />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} format="exponential" />
        // @ts-expect-error TS(2786): 'Crosshair' cannot be used as a JSX component.
        <Crosshair enabled={true}>
          // @ts-expect-error TS(2786): 'HorizontalLine' cannot be used as a JSX component... Remove this comment to see the full error message
          <HorizontalLine visible={false} />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true} format={crosshairFormat} />
        </Crosshair>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
      </Chart>
    );
  }
}

export default App;
