import React from 'react';
import {
  CircularGauge, Scale, Label, RangeContainer, Range, Export, Title, Font,
} from 'devextreme-react/circular-gauge';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={45}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={100} tickInterval={10}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={this.customizeText} />
        </Scale>
        // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
        <RangeContainer>
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={0} endValue={20} color="#CE2029" />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={20} endValue={50} color="#FFD700" />
          // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
          <Range startValue={50} endValue={100} color="#228B22" />
        </RangeContainer>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Battery Charge">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </CircularGauge>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} %`;
  }
}

export default App;
