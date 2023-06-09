import React from 'react';
import {
  CircularGauge, Scale, Title, Font, Margin, MinorTick,
  Export, RangeContainer, ValueIndicator,
} from 'devextreme-react/circular-gauge';

function CenterTemplate(gauge) {
  return (
    <svg>
      <rect y="0" x="0" width="200" height="200" fill="transparent"></rect>

      <g transform="translate(50 0)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="#f2f2f2"></rect>
        <text textAnchor="middle" y="27" x="50" fill="#000" fontSize="20">
          <tspan x="50">{gauge.value()}</tspan>
          <tspan x="50" dy="30">kg</tspan>
        </text>
      </g>

      <g transform="translate(43 140)">
        <rect className="description" x="0" y="0" width="114" height="56" rx="8" fill="#fff"></rect>
        <text textAnchor="start" y="23" x="15" fill="#000" fontSize="12">
          <tspan x="15">Capacity: 10 kg</tspan>
          <tspan x="15" dy="20">Graduation: 10 g</tspan>
        </text>
      </g>

    </svg>
  );
}

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={7.78}
        centerRender={CenterTemplate}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={10} tickInterval={1}>
          // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
          <MinorTick visible />
        </Scale>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled />
        // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
        <RangeContainer backgroundColor="#03a9f4" />
        // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
        <ValueIndicator color="#03a9f4" />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Gold Production (in Kilograms)" verticalAlignment="bottom">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={25} />
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin top={25} />
        </Title>
      </CircularGauge>
    );
  }
}

export default App;
