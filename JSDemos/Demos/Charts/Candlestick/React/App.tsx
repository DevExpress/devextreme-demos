import React from 'react';

import Chart, {
  CommonSeriesSettings,
  Series,
  Reduction,
  ArgumentAxis,
  Label,
  Format,
  ValueAxis,
  Title,
  Legend,
  Export,
  Tooltip,
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        title="Stock Price"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; }' is... Remove this comment to see the full error message
          argumentField="date"
          type="candlestick"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; name: string; openValue... Remove this comment to see the full error message
          name="E-Mart"
          openValueField="o"
          highValueField="h"
          lowValueField="l"
          closeValueField="c"
        >
          // @ts-expect-error TS(2786): 'Reduction' cannot be used as a JSX component.
          <Reduction color="red" />
        </Series>
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis workdaysOnly={true}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label format="shortDate" />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis tickInterval={1}>
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="US dollars" />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format
              // @ts-expect-error TS(2322): Type '{ precision: number; type: string; }' is not... Remove this comment to see the full error message
              precision={0}
              type="currency"
            />
          </Label>
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend itemTextPosition="left" />
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

  customizeTooltip(arg) {
    return {
      text: `Open: $${arg.openValue}<br/>
Close: $${arg.closeValue}<br/>
High: $${arg.highValue}<br/>
Low: $${arg.lowValue}<br/>`,
    };
  }
}

export default App;
