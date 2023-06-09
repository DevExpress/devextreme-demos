import React from 'react';

import CircularGauge, {
  Geometry,
  Scale as CircularScale,
  Size as CircularSize,
  ValueIndicator as CircularValueIndicator,
} from 'devextreme-react/circular-gauge';

import LinearGauge, {
  Label,
  MinorTick,
  Scale as LinearScale,
  Size as LinearSize,
  ValueIndicator as LinearValueIndicator,
} from 'devextreme-react/linear-gauge';

import Slider from 'devextreme-react/slider';

import Indicator from './Indicator.js';

const color = '#f05b41';

function CenterTemplate(gauge) {
  return (
    <svg>
      <circle cx="100" cy="100" r="55" strokeWidth="2" stroke={color} fill="transparent"></circle>
      <text textAnchor="middle" alignmentBaseline="middle" y="100" x="100" fontSize="50" fontWeight="lighter" fill={color}>{gauge.value()}</text>
    </svg>
  );
}

class App extends React.Component {
  handleSpeedChange: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      speedValue: 40,
    };

    this.handleSpeedChange = ({ value }) => {
      this.setState({ speedValue: value });
    };
  }

  render() {
    const { speedValue } = this.state;
    return (
      <div id="gauge-demo">

        <div id="gauge-container">
          <div className="left-section">
            <Indicator
              value={speedValue / 2}
              inverted={false}
              startAngle={180}
              endAngle={90} color={color}
            />
            <Indicator
              value={speedValue / 2}
              inverted={true}
              startAngle={-90}
              endAngle={-180}
              color={color}
            />
          </div>
          &nbsp;
          <div className="center-section">
            // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
            <CircularGauge value={speedValue} centerRender={CenterTemplate}>
              // @ts-expect-error TS(2786): 'CircularSize' cannot be used as a JSX component.
              <CircularSize width={260} />
              // @ts-expect-error TS(2786): 'CircularScale' cannot be used as a JSX component.
              <CircularScale
                // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; tick... Remove this comment to see the full error message
                startValue={20}
                endValue={200}
                tickInterval={20}
                minorTickInterval={10}
              />
              // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
              <Geometry startAngle={225} endAngle={315} />
              // @ts-expect-error TS(2786): 'CircularValueIndicator' cannot be used as a JSX c... Remove this comment to see the full error message
              <CircularValueIndicator
                // @ts-expect-error TS(2322): Type '{ indentFromCenter: number; color: string; s... Remove this comment to see the full error message
                indentFromCenter={55}
                color={color}
                spindleSize={0}
                spindleGapSize={0}
              />
            </CircularGauge>

            // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
            <LinearGauge value={50 - speedValue * 0.24} id="fuel-gauge">
              // @ts-expect-error TS(2786): 'LinearSize' cannot be used as a JSX component.
              <LinearSize width={90} height={20} />
              // @ts-expect-error TS(2786): 'LinearScale' cannot be used as a JSX component.
              <LinearScale
                // @ts-expect-error TS(2322): Type '{ children: Element[]; startValue: number; e... Remove this comment to see the full error message
                startValue={0}
                endValue={50}
                tickInterval={25}
                minorTickInterval={12.5}
              >
                // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
                <MinorTick visible={true} />
                // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
                <Label visible={false} />
              </LinearScale>
              // @ts-expect-error TS(2786): 'LinearValueIndicator' cannot be used as a JSX com... Remove this comment to see the full error message
              <LinearValueIndicator
                // @ts-expect-error TS(2322): Type '{ size: number; offset: number; color: strin... Remove this comment to see the full error message
                size={8}
                offset={7}
                color={color}
              />
            </LinearGauge>
          </div>
          &nbsp;
          <div className="right-section">
            <Indicator
              value={speedValue / 2}
              inverted={true}
              startAngle={90}
              endAngle={0}
              color={color}
            />
            <Indicator
              value={speedValue / 2}
              inverted={false}
              startAngle={0}
              endAngle={-90}
              color={color}
            />
          </div>
        </div>

        // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
        <Slider
          value={this.state.speedValue}
          onValueChanged={this.handleSpeedChange}
          width={155}
          min={0}
          max={200}
          id="slider"
        />
      </div>
    );
  }
}

export default App;
