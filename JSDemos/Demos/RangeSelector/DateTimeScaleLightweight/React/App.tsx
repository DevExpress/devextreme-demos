import React from 'react';
import {
  RangeSelector, Margin, Scale, MinorTick, SliderMarker,
} from 'devextreme-react/range-selector';

const startValue = new Date(2011, 1, 1);
const endValue = new Date(2011, 6, 1);
const range = [new Date(2011, 1, 5), new Date(2011, 2, 5)];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Vacation Period"
      defaultValue={range}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale startValue={startValue} endValue={endValue} minorTickInterval="day" tickInterval="week" minRange="week" maxRange="month">
        // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
        <MinorTick visible={false} />
      </Scale>
      // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
      <SliderMarker format="monthAndDay" />
    </RangeSelector>
  );
}

export default App;
