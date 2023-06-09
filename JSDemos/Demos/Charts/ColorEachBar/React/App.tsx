import React from 'react';

import {
  Chart, SeriesTemplate, CommonSeriesSettings, Title,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        palette="Soft"
        dataSource={dataSource}>
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
          argumentField="age"
          valueField="number"
          type="bar"
          ignoreEmptyPoints={true}
        />
        // @ts-expect-error TS(2786): 'SeriesTemplate' cannot be used as a JSX component... Remove this comment to see the full error message
        <SeriesTemplate nameField="age" />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title
          // @ts-expect-error TS(2322): Type '{ text: string; subtitle: string; }' is not ... Remove this comment to see the full error message
          text="Age Breakdown of Facebook Users in the U.S."
          subtitle="as of January 2017"
        />
      </Chart>
    );
  }
}

export default App;
