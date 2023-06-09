import React from 'react';

import PieChart, {
  Legend,
  Series,
  Export,
  HoverStyle,
} from 'devextreme-react/pie-chart';

import { olympicMedals } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
      <PieChart
        id="pie"
        type="doughnut"
        title="Olympic Medals in 2008"
        palette="Soft Pastel"
        dataSource={olympicMedals}
        onPointClick={this.pointClickHandler}
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series argumentField="country" valueField="medals">
          // @ts-expect-error TS(2786): 'HoverStyle' cannot be used as a JSX component.
          <HoverStyle color="#ffd700" />
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
      </PieChart>
    );
  }

  pointClickHandler(arg) {
    arg.target.select();
  }
}

export default App;
