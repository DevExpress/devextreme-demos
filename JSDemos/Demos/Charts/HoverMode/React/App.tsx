import React from 'react';
import {
  Chart,
  CommonSeriesSettings,
  Series,
  Export,
  Legend,
  Point,
} from 'devextreme-react/chart';
import { yearSources, grossProductData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={grossProductData}
        stickyHovering={false}
        title="Great Lakes Gross State Product"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="state"
          type="spline"
          hoverMode="includePoints"
        >
          // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
          <Point hoverMode="allArgumentPoints" />
        </CommonSeriesSettings>
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          yearSources.map((item) => <Series
            key={item.value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={item.value}
            name={item.name} />)
        }
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
          hoverMode="excludePoints"
        />
      </Chart>
    );
  }
}

export default App;
