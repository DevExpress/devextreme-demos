import React from 'react';
import {
  CircularGauge, Scale, Label, RangeContainer, Range, Title, Font, Export,
} from 'devextreme-react/circular-gauge';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={105}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={50} endValue={150} tickInterval={10}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label useRangeColors={true} />
        </Scale>
        // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
        <RangeContainer palette="pastel">
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={50} endValue={90} />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={90} endValue={130} />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={130} endValue={150} />
        </RangeContainer>
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Temperature of the Liquid in the Boiler">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </CircularGauge>
    );
  }
}

export default App;
