import React from 'react';

import PieChart, {
  Legend,
  Series,
  Export,
  Label,
  SmallValuesGrouping,
  Connector,
} from 'devextreme-react/pie-chart';

import { internetLanguages } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie"
        type="doughnut"
        title="Top Internet Languages"
        palette="Soft Pastel"
        dataSource={internetLanguages}
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="language" valueField="percent">
          // @ts-expect-error TS(2786): 'SmallValuesGrouping' cannot be used as a JSX comp... Remove this comment to see the full error message
          <SmallValuesGrouping mode="topN" topCount={3} />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label
            // @ts-expect-error TS(2322): Type '{ children: Element; visible: boolean; forma... Remove this comment to see the full error message
            visible={true}
            format="fixedPoint"
            customizeText={this.customizeLabel}
          >
            // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />
      </PieChart>
    );
  }

  customizeLabel(point) {
    return `${point.argumentText}: ${point.valueText}%`;
  }
}

export default App;
