import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  ValueErrorBar,
  Pane,
  ArgumentAxis,
  ValueAxis,
  Export,
  Legend,
  Label,
  Title,
  Tooltip,
  Grid,
} from 'devextreme-react/chart';
import { weatherData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={weatherData}
        defaultPane="bottom"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="month" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; pane: string; valueFiel... Remove this comment to see the full error message
          pane="top"
          valueField="avgT"
          name="Average Temperature, °C"
        >
          // @ts-expect-error TS(2786): 'ValueErrorBar' cannot be used as a JSX component.
          <ValueErrorBar
            // @ts-expect-error TS(2322): Type '{ lowValueField: string; highValueField: str... Remove this comment to see the full error message
            lowValueField="avgLowT"
            highValueField="avgHighT"
            lineWidth={1}
            opacity={0.8}
          />
        </Series>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; pane: string; valueFiel... Remove this comment to see the full error message
          pane="bottom"
          valueField="avgH"
          type="bar"
          name="Average Humidity, %"
        >
          // @ts-expect-error TS(2786): 'ValueErrorBar' cannot be used as a JSX component.
          <ValueErrorBar
            // @ts-expect-error TS(2322): Type '{ type: string; value: number; lineWidth: nu... Remove this comment to see the full error message
            type="fixed"
            value={3}
            lineWidth={1}
          />
        </Series>

        // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
        <Pane name="top" />
        // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
        <Pane name="bottom" />

        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label displayMode="stagger" />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis pane="top">
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Temperature, °C" />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis
          // @ts-expect-error TS(2322): Type '{ children: Element[]; tickInterval: number;... Remove this comment to see the full error message
          tickInterval={50}
          pane="bottom"
        >
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Humidity, %" />
        </ValueAxis>

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (point... Remove this comment to see the full error message
          enabled={true}
          customizeTooltip={customizeTooltip}
        />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Weather in Los Angeles, California" />
      </Chart>
    );
  }
}

function customizeTooltip(pointInfo) {
  return {
    text: `${pointInfo.seriesName}: ${pointInfo.value
    } (range: ${pointInfo.lowErrorValue
    } - ${pointInfo.highErrorValue})`,
  };
}

export default App;
