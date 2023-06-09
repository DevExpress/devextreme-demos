import React from 'react';
import {
  CircularGauge, Geometry, Scale, Label, ValueIndicator,
} from 'devextreme-react/circular-gauge';
import {
  LinearGauge,
  Geometry as LinearGaugeGeometry,
  Scale as LinearGaugeScale,
  Label as LinearGaugeLabel,
  ValueIndicator as LinearValueIndicator,
} from 'devextreme-react/linear-gauge';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="long-title">
          <h3>Deviation from the Target (Horizontal and Vertical)</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
          <CircularGauge
            id="c1"
            value={20}
          >
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry startAngle={135} endAngle={45} />
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale startValue={45} endValue={-45} tickInterval={45}>
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label customizeText={this.customizeText} />
            </Scale>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator baseValue={0} type="rangebar" />
          </CircularGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            id="c2"
            value={-10}
          >
            // @ts-expect-error TS(2786): 'LinearGaugeGeometry' cannot be used as a JSX comp... Remove this comment to see the full error message
            <LinearGaugeGeometry orientation="vertical" />
            // @ts-expect-error TS(2786): 'LinearGaugeScale' cannot be used as a JSX compone... Remove this comment to see the full error message
            <LinearGaugeScale startValue={-45} endValue={45} tickInterval={45}>
              // @ts-expect-error TS(2786): 'LinearGaugeLabel' cannot be used as a JSX compone... Remove this comment to see the full error message
              <LinearGaugeLabel customizeText={this.customizeText} />
            </LinearGaugeScale>
            // @ts-expect-error TS(2786): 'LinearValueIndicator' cannot be used as a JSX com... Remove this comment to see the full error message
            <LinearValueIndicator baseValue={0} />
          </LinearGauge>
        </div>
      </div>
    );
  }

  customizeText({ valueText }) {
    return `${valueText}°`;
  }
}

export default App;
