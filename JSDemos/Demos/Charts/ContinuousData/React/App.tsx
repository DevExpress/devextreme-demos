import React from 'react';
import {
  PolarChart,
  Series,
  ArgumentAxis,
  Export,
  Legend,
} from 'devextreme-react/polar-chart';
import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PolarChart' cannot be used as a JSX component.
      <PolarChart
        id="chart"
        dataSource={dataSource}
        title="Rose in Polar Coordinates"
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series type="line" />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis
          // @ts-expect-error TS(2322): Type '{ inverted: boolean; startAngle: number; tic... Remove this comment to see the full error message
          inverted={true}
          startAngle={90}
          tickInterval={30}
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
      </PolarChart>
    );
  }
}

export default App;
