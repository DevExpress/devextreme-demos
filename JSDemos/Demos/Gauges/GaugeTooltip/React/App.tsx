import React from 'react';
import {
  CircularGauge, Scale, Tooltip, Font, Export, Title,
} from 'devextreme-react/circular-gauge';

const subvalues = [8, 18];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'CircularGauge' cannot be used as a JSX component.
      <CircularGauge
        id="gauge"
        value={12}
        subvalues={subvalues}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={20} tickInterval={5} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={40} color="#DCD0FF" />
        </Tooltip>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Rheostat Resistance">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </CircularGauge>
    );
  }

  customizeTooltip({ valueText }) {
    return {
      text: `${valueText} ohm`,
    };
  }
}

export default App;
