import React from 'react';

import Chart, {
  ArgumentAxis,
  Series,
  CommonSeriesSettings,
  Label,
  Legend,
  Border,
  Export,
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        title="Australian Medal Count"
        dataSource={dataSource}
        id="chart">
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="bronze" name="Bronze Medals" color="#cd7f32" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="silver" name="Silver Medals" color="#c0c0c0" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="gold" name="Gold Medals" color="#ffd700" />
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="year"
          type="steparea">
          // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
          <Border visible={false} />
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis valueMarginsEnabled={false}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label format="decimal" />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center" />
      </Chart>
    );
  }
}

export default App;
