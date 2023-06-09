import React from 'react';
import Chart, {
  ArgumentAxis,
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
} from 'devextreme-react/chart';
import { zoomingData } from './data.js';

const visualRange = { startValue: 300, endValue: 500 };

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        palette="Harmony Light"
        dataSource={zoomingData}>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="arg" valueField="y1" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="arg" valueField="y2" />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis defaultVisualRange={visualRange} />
        // @ts-expect-error TS(2786): 'ScrollBar' cannot be used as a JSX component.
        <ScrollBar visible={true} />
        // @ts-expect-error TS(2786): 'ZoomAndPan' cannot be used as a JSX component.
        <ZoomAndPan argumentAxis="both" />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
      </Chart>
    );
  }
}

export default App;
