import React from 'react';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Point,
  Label,
  Format,
} from 'devextreme-react/chart';
import { medalSources, olympicAchievements } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="container"
        dataSource={olympicAchievements}
        title="Australian Olympic Medal Count"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; type: string; argumentF... Remove this comment to see the full error message
          type="stepline"
          argumentField="year"
        >
          // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
          <Point visible={false} />
        </CommonSeriesSettings>
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          medalSources.map((item) => <Series
            key={item.value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={item.value}
            name={item.name}
            color={item.color} />)
        }
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format type="decimal" />
          </Label>
        </ArgumentAxis>
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

export default App;
