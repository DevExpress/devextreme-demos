import React from 'react';
import {
  CircularGauge, ValueIndicator, Scale, Label, Geometry,
} from 'devextreme-react/circular-gauge';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Power of Engines</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="rectangleNeedle"
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
              type="rectangleNeedle"
              color="#9B870C"
            ></ValueIndicator>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
          </CircularGauge>&nbsp;
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="twoColorNeedle"
            value={80}
          >
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; secondColor: ... Remove this comment to see the full error message
              type="twoColorNeedle"
              color="#779ECB"
              secondColor="#734F96"
            ></ValueIndicator>
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
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
          </CircularGauge>&nbsp;
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="triangleNeedle"
            value={65}
          >
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="triangleNeedle"
              color="#8FBC8F"
            ></ValueIndicator>
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
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="rangebar"
            value={90}
          >
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rangebar"
              color="#f05b41"
            ></ValueIndicator>
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
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
          </CircularGauge>&nbsp;
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="textCloud"
            value={70}
          >

            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="textCloud"
              color="#483D8B"
            ></ValueIndicator>
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
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
          </CircularGauge>&nbsp;
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="triangleMarker"
            value={85}
          >
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="triangleMarker"
              color="#e0e33b"
            ></ValueIndicator>
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
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>

          </CircularGauge>
        </div>
      </div>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} %`;
  }
}

export default App;
