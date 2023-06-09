import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  ValueAxis,
  Label,
  VisualRange,
  Format,
  Export,
  Legend,
} from 'devextreme-react/chart';
import { inflationData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={inflationData}
        palette="Violet"
        title="Annual Inflation Rate in 2010 and 2011"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; }' is... Remove this comment to see the full error message
          argumentField="date"
          type="rangearea"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ rangeValue1Field: string; rangeValue2Field... Remove this comment to see the full error message
          rangeValue1Field="val2010"
          rangeValue2Field="val2011"
          name="2010 - 2011"
        />

        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis valueMarginsEnabled={false}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label format="month" />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis
          // @ts-expect-error TS(2322): Type '{ children: Element[]; tickInterval: number;... Remove this comment to see the full error message
          tickInterval={0.5}
          valueMarginsEnabled={false}
        >
          // @ts-expect-error TS(2786): 'VisualRange' cannot be used as a JSX component.
          <VisualRange
            // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; }' i... Remove this comment to see the full error message
            startValue={0.5}
            endValue={4}
          />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={customizeLabelText}>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format
              // @ts-expect-error TS(2322): Type '{ precision: number; type: string; }' is not... Remove this comment to see the full error message
              precision={2}
              type="fixedPoint"
            />
          </Label>
        </ValueAxis>

        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
      </Chart>
    );
  }
}

function customizeLabelText({ valueText }) {
  return `${valueText} %`;
}

export default App;
