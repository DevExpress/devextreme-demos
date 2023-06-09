import React from 'react';

import PieChart, {
  Series,
  Legend,
  Label,
  Connector,
} from 'devextreme-react/pie-chart';

import { data } from './data.js';
import CenterTemplate from './CenterTemplate.js';

const countries = Array.from(new Set(data.map((item) => item.country)));

class App extends React.Component {
  customizeLabel(e) {
    return `${e.argumentText}\n${e.valueText}`;
  }

  render() {
    const pies = countries.map((country) => (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie-chart"
        key={country}
        dataSource={data.filter((i) => i.country === country)}
        resolveLabelOverlapping="shift"
        sizeGroup="piesGroup"
        innerRadius={0.65}
        centerRender={CenterTemplate}
        type="doughnut"
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="commodity"
          valueField="total"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true}
            format="fixedPoint"
            customizeText={this.customizeLabel}
            backgroundColor="none">
            // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
            <Connector visible={true}></Connector>
          </Label>
        </Series>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
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
}

export default App;
