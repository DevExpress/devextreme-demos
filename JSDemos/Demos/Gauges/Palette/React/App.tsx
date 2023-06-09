import React from 'react';
import {
  BarGauge, Label, Export, Title, Font,
} from 'devextreme-react/bar-gauge';

const values = [-21.3, 14.8, -30.9, 45.2];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'BarGauge' cannot be used as a JSX component.
      <BarGauge
        id="gauge"
        startValue={-50}
        endValue={50}
        baseValue={0}
        values={values}
        palette="Ocean"
      >
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label customizeText={this.customizeText} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Deviations in the Manufactured Parts">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </BarGauge>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} mm`;
  }
}

export default App;
