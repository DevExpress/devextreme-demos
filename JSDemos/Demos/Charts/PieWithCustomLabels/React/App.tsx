import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import { dataSource } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
        title="Olympic Medals in 2008"
      >
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ orientation: string; itemTextPosition: str... Remove this comment to see the full error message
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="country" valueField="medals">
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label
            // @ts-expect-error TS(2322): Type '{ children: Element[]; visible: boolean; pos... Remove this comment to see the full error message
            visible={true}
            position="columns"
            customizeText={customizeText}>
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font size={16} />
            // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default App;
