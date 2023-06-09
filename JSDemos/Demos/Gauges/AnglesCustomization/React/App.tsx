import React from 'react';
import { CircularGauge, Scale, Geometry } from 'devextreme-react/circular-gauge';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Humidity in Rooms (%)</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="gaugeOptions1"
            className="gauge"
            value={80}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; tick... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={10}
            ></Scale>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={90}
            >
            </Geometry>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="gaugeOptions2"
            className="gauge"
            value={75}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; tick... Remove this comment to see the full error message
              startValue={100}
              endValue={0}
              tickInterval={10}
            ></Scale>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={90}
              endAngle={0}
            >
            </Geometry>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="gaugeOptions3"
            className="gauge"
            value={70}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; tick... Remove this comment to see the full error message
              startValue={100}
              endValue={0}
              tickInterval={10}
            ></Scale>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={-90}
              endAngle={-180}
            >
            </Geometry>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="gaugeOptions4"
            className="gauge"
            value={68}
          >
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; tick... Remove this comment to see the full error message
              startValue={0}
              endValue={100}
              tickInterval={10}
            ></Scale>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={0}
              endAngle={-90}
            >
            </Geometry>
          </CircularGauge>
        </div>
      </div>
    );
  }
}

export default App;
