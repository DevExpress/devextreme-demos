import React from 'react';

import Chart, {
  Legend,
  SeriesTemplate,
  Title,
  Subtitle,
  CommonSeriesSettings,
  Export,
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        palette="Violet"
        dataSource={dataSource}>
        // @ts-expect-error TS(2786): 'SeriesTemplate' cannot be used as a JSX component... Remove this comment to see the full error message
        <SeriesTemplate
          // @ts-expect-error TS(2322): Type '{ nameField: string; customizeSeries: (value... Remove this comment to see the full error message
          nameField="year"
          customizeSeries={customizeSeries}
        />
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
          argumentField="country"
          valueField="oil"
          type="bar"
        />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Oil Production">
          // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
          <Subtitle text="(in millions tonnes)" />
        </Title>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }
}

function customizeSeries(valueFromNameField) {
  return valueFromNameField === 2009 ? { type: 'line', label: { visible: true }, color: '#ff3f7a' } : {};
}

export default App;
