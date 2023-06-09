import React from 'react';

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series,
} from 'devextreme-react/chart';

import { populationData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        title="World Population by Decade"
        dataSource={populationData}
        id="chart"
      >

        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis tickInterval={10}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label format="decimal" />
        </ArgumentAxis>

        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ type: string; }' is not assignable to type... Remove this comment to see the full error message
          type="bar"
        />

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ visible: boolean; }' is not assignable to ... Remove this comment to see the full error message
          visible={false}
        />

      </Chart>
    );
  }
}

export default App;
