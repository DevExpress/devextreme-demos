import React from 'react';

import {
  Chart,
  Series,
  CommonSeriesSettings,
  Point,
  Legend,
  ValueAxis,
  ArgumentAxis,
  Grid,
  MinorGrid,
  CommonPaneSettings,
  Border,
} from 'devextreme-react/chart';
import { generateDataSource } from './data.js';

const dataSource = generateDataSource();

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
    <Chart id="chart" dataSource={dataSource}>
      // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
      <CommonSeriesSettings type="scatter" />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ valueField: string; argumentField: string;... Remove this comment to see the full error message
        valueField="y1"
        argumentField="x1" />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ children: Element; valueField: string; arg... Remove this comment to see the full error message
        valueField="y2"
        argumentField="x2"
      >
        // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
        <Point symbol="triangleDown" />
      </Series>
      // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
      <ArgumentAxis
        // @ts-expect-error TS(2322): Type '{ children: Element[]; tickInterval: number;... Remove this comment to see the full error message
        tickInterval={5}
      >
        // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
        <Grid visible={true} />
        // @ts-expect-error TS(2786): 'MinorGrid' cannot be used as a JSX component.
        <MinorGrid visible={true} />
      </ArgumentAxis>
      // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
      <ValueAxis tickInterval={50} />
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend visible={false} />
      // @ts-expect-error TS(2786): 'CommonPaneSettings' cannot be used as a JSX compo... Remove this comment to see the full error message
      <CommonPaneSettings>
        // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
        <Border visible={true} />
      </CommonPaneSettings>
    </Chart>
  );
}
