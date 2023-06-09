import React from 'react';
import RangeSelector, {
  Margin, Background, Image, Indent, SliderMarker, Scale, TickInterval, MinorTickInterval, Label,
} from 'devextreme-react/range-selector';

const startValue = new Date(2012, 8, 29, 0, 0, 0);
const endValue = new Date(2012, 8, 29, 24, 0, 0);
const range = [new Date(2012, 8, 29, 11, 0, 0), new Date(2012, 8, 29, 17, 0, 0)];

function App() {
  return (
    // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
    <RangeSelector
      id="range-selector"
      title="Select a Time Period"
      defaultValue={range}
    >
      // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
      <Margin top={50} bottom={0} />
      // @ts-expect-error TS(2786): 'Background' cannot be used as a JSX component.
      <Background>
        // @ts-expect-error TS(2786): 'Image' cannot be used as a JSX component.
        <Image url="../../../../images/RangeSelector/background.png" location="full" />
      </Background>
      // @ts-expect-error TS(2786): 'Indent' cannot be used as a JSX component.
      <Indent left={65} right={65} />
      // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
      <SliderMarker placeholderHeight={30} format="shorttime" />
      // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
      <Scale startValue={startValue} endValue={endValue} placeholderHeight={20}>
        // @ts-expect-error TS(2786): 'TickInterval' cannot be used as a JSX component.
        <TickInterval hours={2} />
        // @ts-expect-error TS(2786): 'MinorTickInterval' cannot be used as a JSX compon... Remove this comment to see the full error message
        <MinorTickInterval hours={1} />
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label format="shorttime" />
      </Scale>
    </RangeSelector>
  );
}

export default App;
