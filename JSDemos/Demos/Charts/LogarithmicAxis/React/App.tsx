import React from 'react';

import {
  Chart,
  Series,
  Legend,
  ValueAxis,
  Point,
  Border,
  CommonPaneSettings,
  Tooltip,
  ArgumentAxis,
  Grid,
  Label,
  Export,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
    <Chart
      id="chart"
      title="Relative Masses of the Heaviest Solar System Objects"
      dataSource={dataSource}
      customizePoint={customizePoint}
    >
      // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
      <ArgumentAxis>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label rotationAngle={20} overlappingBehavior="rotate" />
        // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
        <Grid visible={true} />
      </ArgumentAxis>
      // @ts-expect-error TS(2786): 'CommonPaneSettings' cannot be used as a JSX compo... Remove this comment to see the full error message
      <CommonPaneSettings>
        // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
        <Border visible={true} />
      </CommonPaneSettings>
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
        argumentField="name"
        valueField="mass"
        type="scatter"
      >
        // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
        <Point size={20} />
      </Series>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true} />
      // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
      <ValueAxis type="logarithmic" title="Mass Relative to the Earth" />
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend visible={false} />
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} />
    </Chart>
  );
}

function customizePoint({ data }) {
  let color; let
    hoverStyle;
  switch (data.type) {
    case 'Star':
      color = 'red';
      hoverStyle = { border: { color: 'red' } };
      break;
    case 'Satellite':
      color = 'gray';
      hoverStyle = { border: { color: 'gray' } };
      break;
    default:
      break;
  }
  return { color, hoverStyle };
}
