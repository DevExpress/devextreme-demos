import React from 'react';

import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  Label,
  Legend,
  Series,
  Tooltip,
  Margin,
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        title="Population Pyramid For Norway 2016"
        dataSource={dataSource}
        id="chart"
        rotated={true}
        barGroupWidth={18}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ type: string; argumentField: string; }' is... Remove this comment to see the full error message
          type="stackedbar"
          argumentField="age"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; color: s... Remove this comment to see the full error message
          valueField="male"
          name="Male"
          color="#3F7FBF"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; color: s... Remove this comment to see the full error message
          valueField="female"
          name="Female"
          color="#F87CCC"
        />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (e: an... Remove this comment to see the full error message
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={this.customizeLabel} />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ children: Element; verticalAlignment: stri... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        >
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin left={50} />
        </Legend>

      </Chart>
    );
  }

  customizeTooltip(e) {
    return { text: Math.abs(e.valueText) };
  }

  customizeLabel(e) {
    return `${Math.abs(e.value)}%`;
  }
}

export default App;
