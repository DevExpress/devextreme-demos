import React from 'react';

import PieChart, {
  Series,
  Label,
  Legend,
} from 'devextreme-react/pie-chart';

import { countries, waterLandRatio } from './data.js';

const pieCharts = [{
  title: 'Area of Countries',
  palette: 'Soft',
  dataSource: countries,
}, {
  title: 'Water/Land Ratio',
  palette: 'Soft Pastel',
  dataSource: waterLandRatio,
}];

function App() {
  const pies = pieCharts.map((options, i) => (
    // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
    <PieChart
      className="pie"
      key={i}
      title={options.title}
      // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'string[] ... Remove this comment to see the full error message
      palette={options.palette}
      sizeGroup="piesGroup"
      dataSource={options.dataSource}
    >
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series argumentField="name" valueField="area">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label visible={true} format="percent" />
      </Series>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="right"
        rowCount={2}
      />
    </PieChart>
  ));

  return (
    <div className="pies-container">
      {pies}
    </div>
  );
}

export default App;
