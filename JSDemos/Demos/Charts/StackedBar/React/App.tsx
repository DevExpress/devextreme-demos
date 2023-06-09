import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip,
} from 'devextreme-react/chart';
import service from './data.js';

const dataSource = service.getMaleAgeData();

class App extends React.Component {
  customizeTooltip(arg) {
    return {
      text: `${arg.seriesName} years: ${arg.valueText}`,
    };
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        title="Male Age Structure"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="young"
          name="0-14"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="middle"
          name="15-64"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="older"
          name="65 and older"
        />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis position="right">
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="millions" />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; location: string; custom... Remove this comment to see the full error message
          enabled={true}
          location="edge"
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }
}

export default App;
