import React from 'react';

import {
  Chart, CommonSeriesSettings, Legend, SeriesTemplate, Animation, ArgumentAxis, Tick, Title,
} from 'devextreme-react/chart';
import dataSource from './data.js';

const axisCategories = ['Royal Houses'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart id="chart" dataSource={dataSource} barGroupPadding={0.2} rotated={true}>
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis categories={axisCategories}>
          // @ts-expect-error TS(2786): 'Tick' cannot be used as a JSX component.
          <Tick visible={false} />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="The British Monarchy"
          subtitle="An Abbreviated Timeline"
        />
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: never[]; type: string; argumentF... Remove this comment to see the full error message
          type="rangeBar"
          argumentField="monarch"
          rangeValue1Field="start"
          rangeValue2Field="end"
          barOverlapGroup="monarch"
          minBarSize={4}
        >
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend verticalAlignment="bottom" horizontalAlignment="center">
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Royal Houses" />
        </Legend>
        // @ts-expect-error TS(2786): 'SeriesTemplate' cannot be used as a JSX component... Remove this comment to see the full error message
        <SeriesTemplate nameField="house" />
        // @ts-expect-error TS(2786): 'Animation' cannot be used as a JSX component.
        <Animation enabled={false} />
      </Chart>
    );
  }
}

export default App;
