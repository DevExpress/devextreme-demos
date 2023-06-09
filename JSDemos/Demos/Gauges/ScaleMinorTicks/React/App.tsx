import React from 'react';
import {
  CircularGauge, Scale, Tick, MinorTick, RangeContainer, Title, Font, Export,
} from 'devextreme-react/circular-gauge';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={750}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={1000} tickInterval={100} minorTickInterval={25}>
          // @ts-expect-error TS(2786): 'Tick' cannot be used as a JSX component.
          <Tick color="#9c9c9c" />
          // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
          <MinorTick visible={true} color="#9c9c9c" />
        </Scale>
        // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
        <RangeContainer backgroundColor="none" />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Fan Speed (in rpm)">
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
