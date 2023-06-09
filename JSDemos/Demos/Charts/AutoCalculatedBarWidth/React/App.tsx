import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Legend, Export,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        palette="Soft"
        title="Percent of Total Energy Production"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; ignor... Remove this comment to see the full error message
          argumentField="state"
          type="bar"
          ignoreEmptyPoints={true}
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="oil" name="Oil Production" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="gas" name="Gas Production" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="coal" name="Coal Production" />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }
}

export default App;
