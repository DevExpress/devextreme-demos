import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart';

import { areas } from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie"
        dataSource={areas}
        palette="Bright"
        title="Area of Countries"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="country"
          valueField="area"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true}>
            // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
        <Size width={500} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </PieChart>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

export default App;
