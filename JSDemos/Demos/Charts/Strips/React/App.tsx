import React from 'react';

import {
  Chart,
  Series,
  Strip,
  StripStyle,
  Legend,
  ValueAxis,
  Label,
  Font,
  Export,
} from 'devextreme-react/chart';
import { temperaturesData, lowAverage, highAverage } from './data.js';

const highAverageColor = '#ff9b52';
const lowAverageColor = '#6199e6';

function customizePoint(arg) {
  if (arg.value > highAverage) {
    return { color: highAverageColor };
  }
  if (arg.value < lowAverage) {
    return { color: lowAverageColor };
  }
  return null;
}

function customizeLabel(arg) {
  if (arg.value > highAverage) {
    return getLabelsSettings(highAverageColor);
  }
  if (arg.value < lowAverage) {
    return getLabelsSettings(lowAverageColor);
  }
  return null;
}

function getLabelsSettings(backgroundColor) {
  return {
    visible: true,
    backgroundColor,
    customizeText,
  };
}

function customizeText(arg) {
  return `${arg.valueText}&#176F`;
}

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
    <Chart
      id="chart"
      title="Temperature in September"
      dataSource={temperaturesData}
      customizePoint={customizePoint}
      customizeLabel={customizeLabel}
    >
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
        argumentField="day"
        valueField="temperature"
        type="spline"
        color="#a3aaaa"
      />
      // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
      <ValueAxis>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label customizeText={customizeText} />
        // @ts-expect-error TS(2786): 'Strip' cannot be used as a JSX component.
        <Strip startValue={highAverage} color="rgba(255,155,85,0.15)">
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label text="Above average">
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font color={highAverageColor} />
          </Label>
        </Strip>
        // @ts-expect-error TS(2786): 'Strip' cannot be used as a JSX component.
        <Strip endValue={lowAverage} color="rgba(97,153,230,0.10)">
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label text="Below average">
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font color={lowAverageColor} />
          </Label>
        </Strip>
        // @ts-expect-error TS(2786): 'StripStyle' cannot be used as a JSX component.
        <StripStyle>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font weight="500" size="14" />
          </Label>
        </StripStyle>
      </ValueAxis>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend visible={false} />
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled />
    </Chart>
  );
}
