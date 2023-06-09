import React from 'react';

import {
  Chart, Series, ArgumentAxis, Label, CommonSeriesSettings,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';
import { LabelTemplate } from './LabelTemplate.js';

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
    <Chart id="chart"
      title="Ice Hockey World Championship Gold Medal Winners"
      dataSource={dataSource}>
      // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
      <CommonSeriesSettings type="bar" argumentField="country">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label visible></Label>
      </CommonSeriesSettings>
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; valueField: string; color: s... Remove this comment to see the full error message
        name="Gold"
        valueField="gold"
        color="#ffd700" />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; valueField: string; color: s... Remove this comment to see the full error message
        name="Silver"
        valueField="silver"
        color="#c0c0c0" />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; valueField: string; color: s... Remove this comment to see the full error message
        name="Bronze"
        valueField="bronze"
        color="#cd7f32" />
      // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
      <ArgumentAxis>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label render={LabelTemplate}></Label>
      </ArgumentAxis>
    </Chart>
  );
}
