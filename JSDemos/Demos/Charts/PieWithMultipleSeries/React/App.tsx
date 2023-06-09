import React from 'react';

import PieChart, {
  CommonSeriesSettings,
  Legend,
  Series,
  Export,
  Label,
  Title,
  Tooltip,
  Subtitle,
} from 'devextreme-react/pie-chart';

import { exportImportData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie"
        type="doughnut"
        innerRadius={0.2}
        palette="Ocean"
        dataSource={exportImportData}
      >
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Imports/Exports of Goods and Services">
          // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
          <Subtitle text="(billion US$, 2012)" />
        </Title>

        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={false} />
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series name="Export" argumentField="Country" valueField="Export" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series name="Import" argumentField="Country" valueField="Import" />

        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={true} />

        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} format="currency" customizeTooltip={this.customizeTooltip} />
      </PieChart>
    );
  }

  customizeTooltip(arg) {
    return { text: `${arg.argumentText}<br>${arg.seriesName}: ${arg.valueText}B` };
  }
}

export default App;
