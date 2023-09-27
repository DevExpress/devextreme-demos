import React from 'react';

import PieChart, {
  Series,
  Legend,
  Label,
  Connector,
  ILabelProps,
} from 'devextreme-react/pie-chart';

import { data } from './data.ts';
import CenterTemplate from './CenterTemplate.tsx';

const countries = Array.from(new Set(data.map((item) => item.country)));

const customizeLabel: ILabelProps['customizeText'] = (e) => `${e.argumentText}\n${e.valueText}`;

function App() {
  const pies = countries.map((country) => (
    <PieChart
      id="pie-chart"
      key={country}
      dataSource={data.filter((i: { country: any; }) => i.country === country)}
      resolveLabelOverlapping="shift"
      sizeGroup="piesGroup"
      innerRadius={0.65}
      centerRender={CenterTemplate}
      type="doughnut"
    >
      <Series
        argumentField="commodity"
        valueField="total"
      >
        <Label visible={true}
          format="fixedPoint"
          customizeText={customizeLabel}
          backgroundColor="none">
          <Connector visible={true}></Connector>
        </Label>
      </Series>
      <Legend visible={false}></Legend>
    </PieChart>
  ));

  return (
    <div>
      <div className="long-title"><h3>Energy Production (GWh, 2016)</h3></div>
      <div className="pies-container">
        {pies}
      </div>
    </div>
  );
}

export default App;
