import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  Aggregation,
  Point,
  ArgumentAxis,
  ValueAxis,
  Title,
  Font,
  Legend,
  Label,
  Tooltip,
} from 'devextreme-react/chart';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import {
  weatherData, aggregationFunctions, aggregationIntervals, functionLabel, intervalLabel,
} from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      useAggregation: true,
      currentFunction: aggregationFunctions[0].func,
      currentInterval: aggregationIntervals[0].interval,
    };

    this.updateAggregationUsage = this.updateAggregationUsage.bind(this);
    this.updateInterval = this.updateInterval.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="chart"
          dataSource={weatherData}
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings argumentField="date" />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ axis: string; color: string; type: string;... Remove this comment to see the full error message
            axis="precipitation"
            color="#03a9f4"
            type="bar"
            valueField="precipitation"
            name="Precipitation"
          />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; axis: string; color: st... Remove this comment to see the full error message
            axis="temperature"
            color="#ffc0bb"
            type="rangearea"
            rangeValue1Field="minTemp"
            rangeValue2Field="maxTemp"
            name="Temperature range"
          >
            // @ts-expect-error TS(2786): 'Aggregation' cannot be used as a JSX component.
            <Aggregation
              // @ts-expect-error TS(2322): Type '{ enabled: any; calculate: (aggregationInfo:... Remove this comment to see the full error message
              enabled={this.state.useAggregation}
              calculate={calculateRangeArea}
              method="custom"
            />
          </Series>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element[]; axis: string; color: ... Remove this comment to see the full error message
            axis="temperature"
            color="#e91e63"
            valueField="temp"
            name="Average temperature"
          >
            // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
            <Point size={7} />
            // @ts-expect-error TS(2786): 'Aggregation' cannot be used as a JSX component.
            <Aggregation
              // @ts-expect-error TS(2322): Type '{ enabled: any; method: any; }' is not assig... Remove this comment to see the full error message
              enabled={this.state.useAggregation}
              method={this.state.currentFunction}
            />
          </Series>

          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ aggregationInterval: any; valueMarginsEnab... Remove this comment to see the full error message
            aggregationInterval={this.state.currentInterval}
            valueMarginsEnabled={false}
            argumentType="datetime"
          />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis name="temperature">
            // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
            <Title text="Temperature, °C">
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font color="#e91e63" />
            </Title>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label>
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font color="#e91e63" />
            </Label>
          </ValueAxis>
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis
            // @ts-expect-error TS(2322): Type '{ children: Element[]; name: string; positio... Remove this comment to see the full error message
            name="precipitation"
            position="right"
          >
            // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
            <Title text="Precipitation, mm">
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font color="#03a9f4" />
            </Title>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label>
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font color="#03a9f4" />
            </Label>
          </ValueAxis>

          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (point... Remove this comment to see the full error message
            enabled={true}
            customizeTooltip={customizeTooltip}
          />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Weather in Las Vegas, NV (2017)" />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              value={this.state.useAggregation}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.updateAggregationUsage}
              text="Aggregation enabled"
            />
          </div>
          <div className="option">
            <span>Interval:</span>&nbsp;
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={aggregationIntervals}
              value={this.state.currentInterval}
              inputAttr={intervalLabel}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.updateInterval}
              displayExpr="displayName"
              valueExpr="interval"
            />
          </div>
          <div className="option">
            <span>Method:</span>&nbsp;
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={aggregationFunctions}
              inputAttr={functionLabel}
              value={this.state.currentFunction}
              // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
              onValueChanged={this.updateMethod}
              displayExpr="displayName"
              valueExpr="func"
            />
          </div>
        </div>
      </div>
    );
  }

  updateAggregationUsage({ value }) {
    this.setState({ useAggregation: value });
  }

  updateInterval({ value }) {
    this.setState({ currentInterval: value });
  }

  updateMethod({ value }) {
    this.setState({ currentFunction: value });
  }
}

function calculateRangeArea(aggregationInfo) {
  if (!aggregationInfo.data.length) {
    return null;
  }

  const temp = aggregationInfo.data.map((item) => item.temp);
  return {
    date: new Date((aggregationInfo.intervalStart.valueOf()
      + aggregationInfo.intervalEnd.valueOf()) / 2),
    maxTemp: Math.max.apply(null, temp),
    minTemp: Math.min.apply(null, temp),
  };
}

function customizeTooltip(pointInfo) {
  const { aggregationInfo } = pointInfo.point;
  const start = aggregationInfo && aggregationInfo.intervalStart;
  const end = aggregationInfo && aggregationInfo.intervalEnd;
  const handlers = {
    'Average temperature': (arg) => ({
      text: `${(!aggregationInfo
        ? `Date: ${arg.argument.toDateString()}`
        : `Interval: ${start.toDateString()} - ${end.toDateString()}`)
      }<br/>Temperature: ${arg.value.toFixed(2)} °C`,
    }),
    'Temperature range': (arg) => ({
      text: `Interval: ${start.toDateString()
      } - ${end.toDateString()
      }<br/>Temperature range: ${arg.rangeValue1
      } - ${arg.rangeValue2} °C`,
    }),
    Precipitation: (arg) => ({
      text: `Date: ${arg.argument.toDateString()
      }<br/>Precipitation: ${arg.valueText} mm`,
    }),
  };

  return handlers[pointInfo.seriesName](pointInfo);
}

export default App;
