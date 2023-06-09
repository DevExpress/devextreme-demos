import React from 'react';

import Chart, {
  ArgumentAxis,
  Legend,
  Series,
  ValueAxis,
  Label,
  Export,
  Tick,
} from 'devextreme-react/chart';

class App extends React.Component {
  customizeText(e) {
    return `Day ${e.value}`;
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        title="Daily Sales"
        dataSource="../../../../data/simpleJSON.json"
        rotated={true}
        id="chart"
      >

        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={this.customizeText} />
        </ArgumentAxis>

        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis>
          // @ts-expect-error TS(2786): 'Tick' cannot be used as a JSX component.
          <Tick visible={false} />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={false} />
        </ValueAxis>

        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; valueField: string; arg... Remove this comment to see the full error message
          valueField="sales"
          argumentField="day"
          type="bar"
          color="#79cac4"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true} backgroundColor="#c18e92" />
        </Series>

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />

        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />

      </Chart>
    );
  }
}

export default App;
