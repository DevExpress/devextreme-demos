import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Point, Legend,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';
import markerTemplate from './MarkerTemplate.js';

class App extends React.Component {
  onLegendClick(e) {
    e.target.isVisible() ? e.target.hide() : e.target.show();
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart id="chart"
        title="Noisy and Original Signals"
        dataSource={dataSource}
        onLegendClick={this.onLegendClick}>
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="argument">
          // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
          <Point visible={false}></Point>
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="originalValue"
          name="Original Signal"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="value"
          name="Noisy Signal"
        />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ children: never[]; verticalAlignment: stri... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
          markerRender={markerTemplate}
        >
        </Legend>
      </Chart>
    );
  }
}

export default App;
