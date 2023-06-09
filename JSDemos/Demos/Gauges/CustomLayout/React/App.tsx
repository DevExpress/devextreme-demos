import React from 'react';
import {
  CircularGauge,
  Scale,
  Tick,
  Label,
  RangeContainer,
  Range,
  ValueIndicator,
  SubvalueIndicator,
  Title,
  Font,
  Export,
} from 'devextreme-react/circular-gauge';

const subvalues = [40, 90];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={85}
        subvalues={subvalues}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={100} tickInterval={10}>
          // @ts-expect-error TS(2786): 'Tick' cannot be used as a JSX component.
          <Tick color="#536878" />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label indentFromTick={3} />
        </Scale>
        // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
        <RangeContainer offset={10}>
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={0} endValue={30} color="#92000A" />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={30} endValue={70} color="#E6E200" />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={70} endValue={100} color="#77DD77" />
        </RangeContainer>
        // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
        <ValueIndicator offset={50} />
        // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
        <SubvalueIndicator offset={-25} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Amount of Tickets Sold (with Min and Max Expected)">
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
