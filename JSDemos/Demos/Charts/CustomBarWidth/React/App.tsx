import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Legend, Export, Title,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        palette="Soft"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; barPa... Remove this comment to see the full error message
          argumentField="state"
          type="bar"
          barPadding={0.5}
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="year1970" name="1970" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="year1980" name="1980" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="year1990" name="1990" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="year2000" name="2000" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="year2008" name="2008" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="year2009" name="2009" />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Oil Production" subtitle="(in millions tonnes)" />
      </Chart>
    );
  }
}

export default App;
