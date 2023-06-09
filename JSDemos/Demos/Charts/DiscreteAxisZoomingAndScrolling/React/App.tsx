import React from 'react';

import Chart, {
  ValueAxis,
  Label,
  Legend,
  ArgumentAxis,
  CommonSeriesSettings,
  Border,
  Series,
} from 'devextreme-react/chart';

import RangeSelector, {
  Size,
  Chart as ChartOptions,
  Margin,
  Scale,
  Behavior,
  CommonSeriesSettings as CommonSeriesSettingsOptions,
  Series as RsChartSeries,
} from 'devextreme-react/range-selector';
import { series, dataSource } from './data.js';

// @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
const seriesList = series.map((item) => <Series
  // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; key: str... Remove this comment to see the full error message
  valueField={item.valueField}
  name={item.name}
  key={item.name} />);

// @ts-expect-error TS(2786): 'RsChartSeries' cannot be used as a JSX component.
const rsChartSeriesList = series.map((item) => <RsChartSeries
  // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; key: str... Remove this comment to see the full error message
  valueField={item.valueField}
  name={item.name}
  key={item.name} />);

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      visualRange: { startValue: 'Inner Core', endValue: 'Upper Crust' },
    };

    this.updateVisualRange = this.updateVisualRange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="zoomedChart"
          palette="Soft"
          title="The Chemical Composition of the Earth Layers"
          dataSource={dataSource}
        >
          {seriesList}
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label customizeText={formatValueAxisLabel} />
          </ValueAxis>
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis visualRange={this.state.visualRange} />
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings type="bar" ignoreEmptyPoints={true} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={true}
            verticalAlignment="top"
            horizontalAlignment="right"
            orientation="horizontal"
          >
            // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
            <Border visible={true} />
          </Legend>
        </Chart>
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          dataSource={dataSource}
          onValueChanged={this.updateVisualRange }
        >
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={120} />
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin left={10} />
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale minorTickCount={1} startValue="Inner Core" endValue="Upper Crust" />
          // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
          <Behavior valueChangeMode="onHandleMove" />

          // @ts-expect-error TS(2786): 'ChartOptions' cannot be used as a JSX component.
          <ChartOptions palette="Soft">
            {rsChartSeriesList}
            // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
            <Legend visible={false} />
            // @ts-expect-error TS(2786): 'CommonSeriesSettingsOptions' cannot be used as a ... Remove this comment to see the full error message
            <CommonSeriesSettingsOptions type="bar" ignoreEmptyPoints ={true} />
          </ChartOptions>
        </RangeSelector>
      </React.Fragment>
    );
  }

  updateVisualRange(e) {
    this.setState({ visualRange: e.value });
  }
}

function formatValueAxisLabel() {
  return `${this.valueText}%`;
}

export default App;
