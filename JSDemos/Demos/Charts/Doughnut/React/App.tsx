import React from 'react';

import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export,
} from 'devextreme-react/pie-chart';

import { populationByRegions } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie"
        type="doughnut"
        title="The Population of Continents and Regions"
        palette="Soft Pastel"
        dataSource={populationByRegions}
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="region">
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true} format="millions">
            // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
            <Connector visible={true} />
          </Label>
        </Series>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ margin: number; horizontalAlignment: strin... Remove this comment to see the full error message
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
          <Format type="millions" />
        </Tooltip>
      </PieChart>
    );
  }

  customizeTooltip(arg) {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  }
}

export default App;
