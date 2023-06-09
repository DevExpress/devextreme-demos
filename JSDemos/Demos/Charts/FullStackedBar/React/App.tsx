import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip, Title,
} from 'devextreme-react/chart';
import service from './data.js';

const dataSource = service.dataSource();

class App extends React.Component {
  customizeTooltip(arg) {
    return {
      text: `${arg.percentText} years: ${arg.valueText}`,
    };
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title
          // @ts-expect-error TS(2322): Type '{ text: string; subtitle: string; }' is not ... Remove this comment to see the full error message
          text="Energy Consumption in 2004"
          subtitle="(Millions of Tons, Oil Equivalent)"
        />
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="country" type="fullstackedbar" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="hydro" name="Hydro-electric" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="oil" name="Oil" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="gas" name="Natural gas" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="coal" name="Coal" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series valueField="nuclear" name="Nuclear" />

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend verticalAlignment="top"
          horizontalAlignment="center"
          itemTextPosition="right"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (arg: ... Remove this comment to see the full error message
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }
}

export default App;
