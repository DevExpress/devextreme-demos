import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  Legend,
  Label,
} from 'devextreme-react/chart';
import { overlappingModes, population, seriesTypeLabel } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      currentMode: overlappingModes[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="chart"
          dataSource={population}
          title="Population by Countries"
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField="country" />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label
              // @ts-expect-error TS(2322): Type '{ wordWrap: string; overlappingBehavior: any... Remove this comment to see the full error message
              wordWrap="none"
              overlappingBehavior={this.state.currentMode}
            />
          </ArgumentAxis>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Overlapping Modes: </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={overlappingModes}
              value={this.state.currentMode}
              inputAttr={seriesTypeLabel}
              onValueChanged={this.handleChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ currentMode: e.value });
  }
}

export default App;
