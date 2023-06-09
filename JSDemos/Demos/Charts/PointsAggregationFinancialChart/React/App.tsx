import React from 'react';

import Chart, {
  Series,
  Aggregation,
  ArgumentAxis,
  Grid,
  Label,
  ValueAxis,
  Margin,
  Legend,
  Tooltip,
} from 'devextreme-react/chart';

import RangeSelector, {
  Size,
  Scale,
  Chart as RsChart,
  ValueAxis as RsValueAxis,
  Series as RsSeries,
  Aggregation as RsAggregation,
  Behavior,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      visualRange: {},
    };

    this.updateVisualRange = this.updateVisualRange.bind(this);
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="zoomedChart"
          dataSource={dataSource}
          title="Google Inc. Stock Prices"
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; type: string; openValue... Remove this comment to see the full error message
            type="candleStick"
            openValueField="Open"
            highValueField="High"
            lowValueField="Low"
            closeValueField="Close"
            argumentField="Date"
          >
            // @ts-expect-error TS(2786): 'Aggregation' cannot be used as a JSX component.
            <Aggregation enabled={true} />
          </Series>
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ children: Element[]; visualRange: any; val... Remove this comment to see the full error message
            visualRange={this.state.visualRange}
            valueMarginsEnabled={false}
            argumentType="datetime"
          >
            // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
            <Grid visible={true} />
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label visible={false} />
          </ArgumentAxis>
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis valueType="numeric" />
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin right={10} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} />
        </Chart>
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          dataSource={dataSource}
          onValueChanged={this.updateVisualRange}
        >
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={120} />
          // @ts-expect-error TS(2786): 'RsChart' cannot be used as a JSX component.
          <RsChart>
            // @ts-expect-error TS(2786): 'RsValueAxis' cannot be used as a JSX component.
            <RsValueAxis valueType="numeric" />
            // @ts-expect-error TS(2786): 'RsSeries' cannot be used as a JSX component.
            <RsSeries
              // @ts-expect-error TS(2322): Type '{ children: Element; type: string; valueFiel... Remove this comment to see the full error message
              type="line"
              valueField="Open"
              argumentField="Date"
            >
              // @ts-expect-error TS(2786): 'RsAggregation' cannot be used as a JSX component.
              <RsAggregation enabled="true" />
            </RsSeries>
          </RsChart>
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale
            // @ts-expect-error TS(2322): Type '{ placeholderHeight: number; minorTickInterv... Remove this comment to see the full error message
            placeholderHeight={20}
            minorTickInterval="day"
            tickInterval="month"
            valueType="datetime"
            aggregationInterval="week"
          />
          // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
          <Behavior
            // @ts-expect-error TS(2322): Type '{ snapToTicks: boolean; valueChangeMode: str... Remove this comment to see the full error message
            snapToTicks={false}
            valueChangeMode="onHandleMove"
          />
        </RangeSelector>
      </div>
    );
  }

  updateVisualRange(e) {
    this.setState({ visualRange: e.value });
  }
}

export default App;
