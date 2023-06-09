import React from 'react';
import Chart, {
  Title,
  Subtitle,
  CommonSeriesSettings,
  SeriesTemplate,
  Aggregation,
} from 'devextreme-react/chart';
import { oilProductionData } from './data.js';

const App = () => {
  return (
    <Chart id="chart" dataSource={oilProductionData}>
      <Title text="Production of Crude Oil">
        <Subtitle text="(in Barrels)" />
      </Title>
      <CommonSeriesSettings argumentField="state" valueField="value" type="bar">
        <Aggregation enabled={true} method="sum" />
      </CommonSeriesSettings>
      <SeriesTemplate nameField="year" />
    </Chart>
  );
};

export default App;