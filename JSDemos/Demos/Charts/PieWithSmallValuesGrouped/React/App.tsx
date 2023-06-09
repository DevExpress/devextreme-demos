import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  SmallValuesGrouping,
  Legend,
  Export,
} from 'devextreme-react/pie-chart';

import { dataSource } from './data.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
    <PieChart
      id="pie"
      dataSource={dataSource}
      palette="Bright"
      title="Top internet languages"
    >
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ children: Element[]; argumentField: string... Remove this comment to see the full error message
        argumentField="language"
        valueField="percent"
      >
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label visible={true} customizeText={formatLabel} format="fixedPoint">
          // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
          <Connector visible={true} width={0.5} />
        </Label>
        // @ts-expect-error TS(2786): 'SmallValuesGrouping' cannot be used as a JSX comp... Remove this comment to see the full error message
        <SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
      </Series>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend horizontalAlignment="center" verticalAlignment="bottom" />
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} />
    </PieChart>
  );
}

function formatLabel(arg) {
  return `${arg.argumentText}: ${arg.valueText}%`;
}

export default App;
