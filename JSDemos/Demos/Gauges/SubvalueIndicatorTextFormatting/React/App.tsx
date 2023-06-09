import React from 'react';
import {
  CircularGauge, Scale, Label, SubvalueIndicator, Text, Export, Title, Font,
} from 'devextreme-react/circular-gauge';

const subvalues = [2700];

const format = {
  type: 'thousands',
  precision: 1,
};

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={2200}
        subvalues={subvalues}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={3000} tickInterval={500}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={this.customizeText} />
        </Scale>
        // @ts-expect-error TS(2786): 'SubvalueIndicator' cannot be used as a JSX compon... Remove this comment to see the full error message
        <SubvalueIndicator type="textcloud">
          // @ts-expect-error TS(2786): 'Text' cannot be used as a JSX component.
          <Text format={format} customizeText={this.customizeText} />
        </SubvalueIndicator>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Oven Temperature (includes Recommended)">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </CircularGauge>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} °C`;
  }
}

export default App;
