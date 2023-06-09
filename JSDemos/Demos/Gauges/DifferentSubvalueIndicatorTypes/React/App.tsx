import React from 'react';
import {
  CircularGauge, Scale, Geometry, SubvalueIndicator,
} from 'devextreme-react/circular-gauge';

const subValues = [2, 8];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Grades of Goods</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="triangleMarker"
            value={8}
            subvalues={subValues}
          >
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="triangleMarker"
              color="#8FBC8F"
            ></SubvalueIndicator>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={10}
              tickInterval={1}
            >
            </Scale>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="rectangleNeedle"
            value={9}
            subvalues={subValues}
          >

            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="rectangleNeedle"
              color="#9B870C"
            ></SubvalueIndicator>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={10}
              tickInterval={1}
            >
            </Scale>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="triangleNeedle"
            value={5}
            subvalues={subValues}
          >

            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="triangleNeedle"
              color="#779ECB"
            ></SubvalueIndicator>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={10}
              tickInterval={1}
            >
            </Scale>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="textCloud"
            value={6}
            subvalues={subValues}>
            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; }' is not ass... Remove this comment to see the full error message
              type="textCloud"
              color="#f05b41"
            ></SubvalueIndicator>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={10}
              tickInterval={1}
            >
            </Scale>
          </CircularGauge>
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="twoColorNeedle"
            value={4}
            subvalues={subValues}>

            // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
            <SubvalueIndicator
              // @ts-expect-error TS(2322): Type '{ type: string; color: string; secondColor: ... Remove this comment to see the full error message
              type="twoColorNeedle"
              color="#779ECB"
              secondColor="#734F96"
            ></SubvalueIndicator>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry
              // @ts-expect-error TS(2322): Type '{ children: never[]; startAngle: number; end... Remove this comment to see the full error message
              startAngle={180}
              endAngle={0}>
            </Geometry>
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale
              // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: number; end... Remove this comment to see the full error message
              startValue={0}
              endValue={10}
              tickInterval={1}
            >
            </Scale>
          </CircularGauge>
        </div>
      </div>
    );
  }
}

export default App;
