import React from 'react';
import {
  LinearGauge,
  Scale,
  Tick,
  Label,
  RangeContainer,
  Range,
  ValueIndicator,
  SubvalueIndicator,
  Export,
  Title,
  Font,
} from 'devextreme-react/linear-gauge';

const subValues = [5, 25];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
      <LinearGauge
        id="gauge"
        value={17}
        subvalues={subValues}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={30} tickInterval={5}>
          // @ts-expect-error TS(2786): 'Tick' cannot be used as a JSX component.
          <Tick color="#536878" />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label indentFromTick={-3} />
        </Scale>
        // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
        <RangeContainer offset={10}>
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={0} endValue={5} color="#92000A" />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={5} endValue={20} color="#E6E200" />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={20} endValue={30} color="#77DD77" />
        </RangeContainer>
        // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
        <ValueIndicator offset={20} />
        // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
        <SubvalueIndicator offset={-15} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Issues Closed (with Min and Max Expected)">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </LinearGauge>
    );
  }
}

export default App;
