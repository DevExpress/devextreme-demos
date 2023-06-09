import React from 'react';

import Chart, {
  Title,
  Subtitle,
  CommonSeriesSettings,
  SeriesTemplate,
  Aggregation,
} from 'devextreme-react/chart';

import { oilProductionData } from './data.js';

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
    <Chart
      id="chart"
      dataSource={oilProductionData}
    >
      // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
      <Title text="Production of Crude Oil">
        // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
        <Subtitle text="(in Barrels)"></Subtitle>
      </Title>
      // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
      <CommonSeriesSettings
        // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
        argumentField="state"
        valueField="value"
        type="bar"
      >
        // @ts-expect-error TS(2786): 'Aggregation' cannot be used as a JSX component.
        <Aggregation
          // @ts-expect-error TS(2322): Type '{ children: never[]; enabled: boolean; metho... Remove this comment to see the full error message
          enabled={true}
          method="sum"
        >
        </Aggregation>
      </CommonSeriesSettings>
      // @ts-expect-error TS(2786): 'SeriesTemplate' cannot be used as a JSX component... Remove this comment to see the full error message
      <SeriesTemplate nameField="year"></SeriesTemplate>
    </Chart>
  );
}
