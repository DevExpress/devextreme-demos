import React from 'react';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Export,
  Tooltip,
} from 'devextreme-react/polar-chart';
import { fruitSources, productionData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PolarChart' cannot be used as a JSX component.
      <PolarChart
        id="chart"
        dataSource={productionData}
        useSpiderWeb={true}
        title="Fruit Production in 2010 (Millions of Tons)"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings type="line" />
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          fruitSources.map((item) => <Series
            key={item.value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={item.value}
            name={item.name} />)
        }
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} />
      </PolarChart>
    );
  }
}

export default App;
