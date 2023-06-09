import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
import { grossProductData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart id="chart"
        title="Gross State Product within the Great Lakes Region"
        dataSource={grossProductData}
        onPointClick={this.onPointClick}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="state"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true}>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
          argumentField="state"
          valueField="year2018"
          name="2018"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="year2017"
          name="2017"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="year2016"
          name="2016"
        />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }

  onPointClick(e) {
    e.target.select();
  }
}

export default App;
