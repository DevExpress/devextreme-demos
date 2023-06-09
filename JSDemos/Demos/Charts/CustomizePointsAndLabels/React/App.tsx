import React from 'react';

import {
  Chart,
  Series,
  Legend,
  ValueAxis,
  VisualRange,
  Label,
  ConstantLine,
  Export,
} from 'devextreme-react/chart';
import { temperaturesData } from './data.js';

class App extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {
      highAverage: 77,
      lowAverage: 58,
    };
    this.customizeLabel = this.customizeLabel.bind(this);
    this.customizePoint = this.customizePoint.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        title="Daily Temperature in May"
        dataSource={temperaturesData}
        customizePoint={this.customizePoint}
        customizeLabel={this.customizeLabel}
      >
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
          argumentField="day"
          valueField="value"
          type="bar"
          color="#e7d19a"
        />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis maxValueMargin={0.01}>
          // @ts-expect-error TS(2786): 'VisualRange' cannot be used as a JSX component.
          <VisualRange startValue={40} />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={this.customizeText} />
          // @ts-expect-error TS(2786): 'ConstantLine' cannot be used as a JSX component.
          <ConstantLine
            // @ts-expect-error TS(2322): Type '{ children: Element; width: number; value: a... Remove this comment to see the full error message
            width={2}
            value={this.state.lowAverage}
            color="#8c8cff"
            dashStyle="dash"
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label text="Low Average" />
          </ConstantLine>
          // @ts-expect-error TS(2786): 'ConstantLine' cannot be used as a JSX component.
          <ConstantLine
            // @ts-expect-error TS(2322): Type '{ children: Element; width: number; value: a... Remove this comment to see the full error message
            width={2}
            value={this.state.highAverage}
            color="#ff7c7c"
            dashStyle="dash"
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label text="High Average" />
          </ConstantLine>
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }

  customizePoint(arg) {
    if (arg.value > this.state.highAverage) {
      return { color: '#ff7c7c', hoverStyle: { color: '#ff7c7c' } };
    }
    if (arg.value < this.state.lowAverage) {
      return { color: '#8c8cff', hoverStyle: { color: '#8c8cff' } };
    }
    return null;
  }

  customizeLabel(arg) {
    if (arg.value > this.state.highAverage) {
      return {
        visible: true,
        backgroundColor: '#ff7c7c',
        customizeText(e) {
          return `${e.valueText}&#176F`;
        },
      };
    }
    return null;
  }

  customizeText(arg) {
    return `${arg.valueText}&#176F`;
  }
}

export default App;
