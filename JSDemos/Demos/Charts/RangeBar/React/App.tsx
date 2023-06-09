import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  ValueAxis,
  Label,
  Export,
  Legend,
  Tooltip,
} from 'devextreme-react/chart';
import { oilPrices } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={oilPrices}
        palette="Violet"
        title="Crude Oil Prices in 2005"
      >
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true}></Tooltip>
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; minBa... Remove this comment to see the full error message
          argumentField="date"
          type="rangebar"
          minBarSize={2}
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ rangeValue1Field: string; rangeValue2Field... Remove this comment to see the full error message
          rangeValue1Field="aVal1"
          rangeValue2Field="aVal2"
          name="ANS West Coast"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ rangeValue1Field: string; rangeValue2Field... Remove this comment to see the full error message
          rangeValue1Field="tVal1"
          rangeValue2Field="tVal2"
          name="West Texas Intermediate"
        />

        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label format="month" />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis title="$ per barrel" />

        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
      </Chart>
    );
  }
}

export default App;
