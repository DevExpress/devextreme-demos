import React from 'react';

import Chart, {
  ArgumentAxis,
  ValueAxis,
  CommonSeriesSettings,
  SeriesTemplate,
  Point,
  Tooltip,
  Label,
  ZoomAndPan,
  Crosshair,
  Legend,
  Border,
} from 'devextreme-react/chart';

import Button from 'devextreme-react/button';

import { birthLife } from './data.js';

class App extends React.Component {
  chartRef: any;

  resetZoom: any;

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();

    this.resetZoom = () => {
      this.chart.resetVisualRange();
    };
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          title="Life Expectancy vs. Birth Rates"
          dataSource={birthLife}
          ref={this.chartRef}
          id="chart">
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis title="Life Expectancy" />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis title="Birth Rate" />
          // @ts-expect-error TS(2786): 'SeriesTemplate' cannot be used as a JSX component... Remove this comment to see the full error message
          <SeriesTemplate
            // @ts-expect-error TS(2322): Type '{ nameField: string; }' is not assignable to... Remove this comment to see the full error message
            nameField="year" />
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings
            // @ts-expect-error TS(2322): Type '{ children: Element; type: string; argumentF... Remove this comment to see the full error message
            type="scatter"
            argumentField="life_exp"
            valueField="birth_rate">
            // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
            <Point size={8} />
          </CommonSeriesSettings>
          // @ts-expect-error TS(2786): 'ZoomAndPan' cannot be used as a JSX component.
          <ZoomAndPan
            // @ts-expect-error TS(2322): Type '{ valueAxis: string; argumentAxis: string; d... Remove this comment to see the full error message
            valueAxis="both"
            argumentAxis="both"
            dragToZoom={true}
            allowMouseWheel={true}
            panKey="shift" />
          // @ts-expect-error TS(2786): 'Crosshair' cannot be used as a JSX component.
          <Crosshair
            // @ts-expect-error TS(2322): Type '{ children: Element; enabled: boolean; }' is... Remove this comment to see the full error message
            enabled={true}>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label visible={true} />
          </Crosshair>
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (point... Remove this comment to see the full error message
            enabled={true}
            customizeTooltip={customizeTooltip}
          ></Tooltip>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend
            // @ts-expect-error TS(2322): Type '{ children: Element; position: string; }' is... Remove this comment to see the full error message
            position="inside">
            // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
            <Border visible={true} />
          </Legend>
        </Chart>
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button
          id="reset-zoom"
          text="Reset"
          onClick={this.resetZoom}
        ></Button>
      </div>
    );
  }

  get chart() {
    return this.chartRef.current.instance;
  }
}

function customizeTooltip(pointInfo) {
  const { data } = pointInfo.point;
  return {
    text: `${data.country} ${data.year}`,
  };
}

export default App;
