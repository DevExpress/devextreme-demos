import React from 'react';
import RangeSelector, {
  Margin, Scale, MinorTick, Marker, Label, Behavior, SliderMarker,
} from 'devextreme-react/range-selector';
import { SelectBox } from 'devextreme-react/select-box';

const startValue = new Date(2011, 0, 1);
const endValue = new Date(2011, 11, 31);
const behaviorModes = ['onHandleMove', 'onHandleRelease'];

const valueChangeModeLabel = { 'aria-label': 'Value Change Mode' };

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      workingDaysCount: calculateWorkdays([startValue, endValue]),
      behaviorMode: behaviorModes[0],
    };
    this.processRange = this.processRange.bind(this);
    this.setBehavior = this.setBehavior.bind(this);
  }

  render() {
    return (
      <div id="range-selector-demo">
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          id="range-selector"
          title="Calculate the Working Days Count in a Date Period"
          onValueChanged={this.processRange}
        >
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin top={50} />
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale startValue={startValue} endValue={endValue} minorTickInterval="day" tickInterval="month">
            // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
            <MinorTick visible={false} />
            // @ts-expect-error TS(2786): 'Marker' cannot be used as a JSX component.
            <Marker visible={false} />
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label format="MMM" />
          </Scale>
          // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
          <Behavior valueChangeMode={this.state.behaviorMode} />
          // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
          <SliderMarker format="dd EEEE" />
        </RangeSelector>
        <h2>Working days count: { this.state.workingDaysCount }</h2>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Handle Range Changes </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={behaviorModes}
              width={210}
              inputAttr={valueChangeModeLabel}
              value={this.state.behaviorMode}
              onValueChanged={this.setBehavior}
            />
          </div>
        </div>
      </div>
    );
  }

  processRange(e) {
    this.setState({
      workingDaysCount: calculateWorkdays(e.value),
    });
  }

  setBehavior(data) {
    this.setState({
      behaviorMode: data.value,
    });
  }
}

function calculateWorkdays([start, end]) {
  const currentDate = new Date(start);
  let workingDaysCount = 0;

  while (currentDate <= end) {
    if (currentDate.getDay() > 0 && currentDate.getDay() < 6) {
      workingDaysCount += 1;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return workingDaysCount;
}

export default App;
