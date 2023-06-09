import React from 'react';

import Chart, {
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  BreakStyle,
} from 'devextreme-react/chart';

import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';

import { dataSource, lineStyleLabel, maxCountLabel } from './data.js';

const lineStyles = ['waved', 'straight'];
const breaksCount = [1, 2, 3, 4];

class App extends React.Component {
  changeBreaksCount: any;

  changeBreaksEnabledState: any;

  changeStyle: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      autoBreaksEnabledValue: true,
      breaksCountValue: 3,
      lineStyleValue: lineStyles[0],
    };

    this.changeBreaksCount = (e) => {
      this.setState({
        breaksCountValue: e.value,
      });
    };

    this.changeStyle = (e) => {
      this.setState({
        lineStyleValue: e.value,
      });
    };

    this.changeBreaksEnabledState = (e) => {
      this.setState({
        autoBreaksEnabledValue: e.value,
      });
    };
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="chart"
          title={'Relative Masses of the Heaviest\n Solar System Objects'}
          dataSource={dataSource}>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ valueField: string; argumentField: string;... Remove this comment to see the full error message
            valueField="mass"
            argumentField="name"
            type="bar" />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis
            // @ts-expect-error TS(2322): Type '{ children: Element; visible: boolean; autoB... Remove this comment to see the full error message
            visible={true}
            autoBreaksEnabled={this.state.autoBreaksEnabledValue}
            maxAutoBreakCount={this.state.breaksCountValue}>
            // @ts-expect-error TS(2786): 'BreakStyle' cannot be used as a JSX component.
            <BreakStyle line={this.state.lineStyleValue} />
          </ValueAxis>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="options-container">
            <div className="option">
              // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
              <CheckBox className="checkbox"
                text="Enable Breaks"
                onValueChanged={this.changeBreaksEnabledState}
                value={this.state.autoBreaksEnabledValue}>
              </CheckBox>
            </div>
            <div className="option">
              <span>Max Count </span>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                items={breaksCount}
                inputAttr={maxCountLabel}
                value={this.state.breaksCountValue}
                onValueChanged={this.changeBreaksCount}
                width={80}>
              </SelectBox>
            </div>
            <div className="option">
              <span>Style </span>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                items={lineStyles}
                inputAttr={lineStyleLabel}
                value={this.state.lineStyleValue}
                onValueChanged={this.changeStyle}
                width={120}>
              </SelectBox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
