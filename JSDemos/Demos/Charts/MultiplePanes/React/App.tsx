import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  Pane,
  ValueAxis,
  Export,
  Legend,
  Label,
  Title,
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
        defaultPane="bottomPane"
        title="Weather in Glendale, CA"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="month" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ pane: string; color: string; type: string;... Remove this comment to see the full error message
          pane="topPane"
          color="#b0daff"
          type="rangeArea"
          rangeValue1Field="minT"
          rangeValue2Field="maxT"
          name="Monthly Temperature Ranges, °C"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; pane: string; valueFiel... Remove this comment to see the full error message
          pane="topPane"
          valueField="avgT"
          name="Average Temperature, °C"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label
            // @ts-expect-error TS(2322): Type '{ visible: boolean; customizeText: ({ valueT... Remove this comment to see the full error message
            visible={true}
            customizeText={temperatureCustomizeText}
          />
        </Series>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; type: string; valueFiel... Remove this comment to see the full error message
          type="bar"
          valueField="prec"
          name="prec, mm"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label
            // @ts-expect-error TS(2322): Type '{ visible: boolean; customizeText: ({ valueT... Remove this comment to see the full error message
            visible={true}
            customizeText={precipitationCustomizeText}
          />
        </Series>

        // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
        <Pane name="topPane" />
        // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
        <Pane name="bottomPane" />

        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis pane="bottomPane">
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Precipitation, mm" />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis pane="topPane">
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Temperature, °C" />
        </ValueAxis>

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }
}

function temperatureCustomizeText({ valueText }) {
  return `${valueText} °C`;
}

function precipitationCustomizeText({ valueText }) {
  return `${valueText} mm`;
}

export default App;
