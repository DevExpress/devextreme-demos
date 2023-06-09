import React from 'react';
import {
  LinearGauge, Scale, Label, ValueIndicator,
} from 'devextreme-react/linear-gauge';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Available Disk Space</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c1"
            value={75}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={50}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rectangle"
              color="#9B870C"
            ></ValueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c2"
            value={80}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={50}
            >

              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rhombus"
              color="#779ECB"
            ></ValueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c3"
            value={65}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={50}
            >

              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="circle"
              color="#8FBC8F"
            ></ValueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c4"
            value={90}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={50}
            >

              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rangebar"
              color="#483D8B"
            ></ValueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c5"
            value={70}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={50}
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="textCloud"
              color="#734F96"
            ></ValueIndicator>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c6"
            value={85}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={50}
            >

              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText}></Label>
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="triangleMarker"
              color="#f05b41"
            ></ValueIndicator>
          </LinearGauge>
        </div>
      </div>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} %`;
  }
}

export default App;
