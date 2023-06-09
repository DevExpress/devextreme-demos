import React from 'react';

import CircularGauge, {
  Geometry,
  Scale,
  Size,
  ValueIndicator,
} from 'devextreme-react/circular-gauge';

export default function Indicator(props) {
  return (
    // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
    <CircularGauge value={props.value}>
      // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
      <Size width={90} height={90} />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale
        // @ts-expect-error TS(2322): Type '{ startValue: number; endValue: number; tick... Remove this comment to see the full error message
        startValue={props.inverted ? 100 : 0}
        endValue={props.inverted ? 0 : 100}
        tickInterval={50}
      />
      // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
      <Geometry startAngle={props.startAngle} endAngle={props.endAngle} />
      // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
      <ValueIndicator color={props.color} />
    </CircularGauge>
  );
}
