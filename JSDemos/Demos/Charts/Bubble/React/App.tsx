import React from 'react';

import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  ValueAxis,
  ArgumentAxis,
  Label,
  Border,
  Tooltip,
  Export,
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

const palette = ['#00ced1', '#008000', '#ffd700', '#ff7f50'];

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
    <Chart
      id="chart"
      title={'Correlation between Total Population and\n Population with Age over 60'}
      palette={palette}
      onSeriesClick={seriesClick}
      dataSource={dataSource}>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true} location="edge" customizeTooltip={customizeTooltip} />
      // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
      <CommonSeriesSettings type="bubble" />
      // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
      <ValueAxis title="Population with Age over 60">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label customizeText={customizeText} />
      </ValueAxis>
      // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
      <ArgumentAxis title="Total Population">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label customizeText={customizeText} />
      </ArgumentAxis>
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; argumentField: string; value... Remove this comment to see the full error message
        name="Europe"
        argumentField="total1"
        valueField="older1"
        sizeField="perc1"
        tagField="tag1"
      />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; argumentField: string; value... Remove this comment to see the full error message
        name="Africa"
        argumentField="total2"
        valueField="older2"
        sizeField="perc2"
        tagField="tag2"
      />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; argumentField: string; value... Remove this comment to see the full error message
        name="Asia"
        argumentField="total3"
        valueField="older3"
        sizeField="perc3"
        tagField="tag3"
      />
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ name: string; argumentField: string; value... Remove this comment to see the full error message
        name="North America"
        argumentField="total4"
        valueField="older4"
        sizeField="perc4"
        tagField="tag4"
      />
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ children: Element; position: string; horiz... Remove this comment to see the full error message
        position="inside"
        horizontalAlignment="left"
      >
        // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
        <Border visible={true} />
      </Legend>
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} />
    </Chart>
  );
}

function customizeTooltip(pointInfo) {
  return {
    text: `${pointInfo.point.tag}<br/>Total Population: ${pointInfo.argumentText}M<br/>Population with Age over 60: ${pointInfo.valueText}M (${pointInfo.size}%)`,
  };
}

function seriesClick(e) {
  const series = e.target;
  if (series.isVisible()) {
    series.hide();
  } else {
    series.show();
  }
}

function customizeText(e) {
  return `${e.value}M`;
}
