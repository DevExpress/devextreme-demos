import React from 'react';
import RangeSelector, {
  Margin, Scale, MinorTick, Label, SliderMarker,
} from 'devextreme-react/range-selector';

const defaultValue = [40000, 80000];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select House Price Range"
      defaultValue={defaultValue}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale
        // @ts-expect-error TS(2322): Type '{ children: Element[]; startValue: number; e... Remove this comment to see the full error message
        startValue={15000}
        endValue={150000}
        minorTickInterval={500}
        tickInterval={15000}>
        // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
        <MinorTick visible={false} />
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label format="currency" />
      </Scale>
      // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
      <SliderMarker format="currency" />
    </RangeSelector>
  );
}

export default App;
