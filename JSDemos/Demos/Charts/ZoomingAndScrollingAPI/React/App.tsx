import React from 'react';

import Chart, {
  Series,
  Legend,
  CommonSeriesSettings,
  Point,
  ArgumentAxis,
} from 'devextreme-react/chart';

import RangeSelector, {
  Size,
  Chart as ChartOptions,
  Margin,
  Scale,
  Behavior,
} from 'devextreme-react/range-selector';

import { zoomingData } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      visualRange: { startValue: 10, endValue: 880 },
    };

    this.updateVisualRange = this.updateVisualRange.bind(this);
  }

  updateVisualRange(e) {
    this.setState({ visualRange: e.value });
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="zoomedChart"
          palette="Harmony Light"
          dataSource={zoomingData}
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField="arg" valueField="y1" />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField="arg" valueField="y2" />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField="arg" valueField="y3" />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis visualRange={this.state.visualRange} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings>
            // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
            <Point size={7} />
          </CommonSeriesSettings>
        </Chart>
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          dataSource={zoomingData}
          onValueChanged={this.updateVisualRange}
        >
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={120} />
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin left={10} />
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale minorTickCount={1} startValue={10} endValue={880} />
          // @ts-expect-error TS(2786): 'ChartOptions' cannot be used as a JSX component.
          <ChartOptions palette="Harmony Light">
            // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
            <Behavior valueChangeMode="onHandleMove" />
            // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
            <Legend visible={false} />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series argumentField="arg" valueField="y1" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series argumentField="arg" valueField="y2" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series argumentField="arg" valueField="y3" />
          </ChartOptions>
        </RangeSelector>
      </React.Fragment>
    );
  }
}

export default App;
