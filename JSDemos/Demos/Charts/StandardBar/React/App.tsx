import React from 'react';

import { Chart, Series } from 'devextreme-react/chart';
import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart id="chart" dataSource={dataSource}>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; argumentField: string;... Remove this comment to see the full error message
          valueField="oranges"
          argumentField="day"
          name="My oranges"
          type="bar"
          color="#ffaa66" />
      </Chart>
    );
  }
}

export default App;
