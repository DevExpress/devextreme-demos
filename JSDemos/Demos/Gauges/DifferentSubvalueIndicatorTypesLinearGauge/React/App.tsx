import React from 'react';
import {
  LinearGauge, Scale, Label, SubvalueIndicator,
} from 'devextreme-react/linear-gauge';

const subValues = [18, 43];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Current Price (with Min and Max)</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c1"
            value={24}
            subvalues={subValues}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={10}
              endValue={50}
              tickInterval={10}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rectangle"
              color="#9B870C"
            ></SubvalueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c2"
            value={38}
            subvalues={subValues}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={10}
              endValue={50}
              tickInterval={10}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rhombus"
              color="#779ECB"
            ></SubvalueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c3"
            value={21}
            subvalues={subValues}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={10}
              endValue={50}
              tickInterval={10}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="circle"
              color="#8FBC8F"
            ></SubvalueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c4"
            value={42}
            subvalues={subValues}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={10}
              endValue={50}
              tickInterval={10}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="textCloud"
              color="#734F96"
            ></SubvalueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge id="c5"
            value={28}
            subvalues={subValues}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={10}
              endValue={50}
              tickInterval={10}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="triangleMarker"
              color="#f05b41"
            ></SubvalueIndicator>
          </LinearGauge>
        </div>
      </div>
    );
  }

  customizeText({ valueText }) {
    return `$${valueText}`;
  }
}

export default App;
