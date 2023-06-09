import React from 'react';
import RangeSelector, {
  Margin, Scale, Label, SliderMarker, Behavior, Format,
} from 'devextreme-react/range-selector';

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Lead Concentration in Water"
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale
        // @ts-expect-error TS(2322): Type '{ children: Element; minorTickInterval: numb... Remove this comment to see the full error message
        minorTickInterval={0.001}
        tickInterval={0.005}
        startValue={0.004563}
        endValue={0.04976}>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label>
          // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
          <Format type="fixedPoint" precision={3} />
        </Label>
      </Scale>
      // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
      <SliderMarker customizeText={formatText}>
        // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
        <Format type="fixedPoint" precision={4} />
      </SliderMarker>
      // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
      <Behavior snapToTicks={false} />
    </RangeSelector>
  );
}

function formatText({ valueText }) {
  return `${valueText} mg/L`;
}

export default App;
