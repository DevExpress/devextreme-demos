import React from 'react';
import {
  BarGauge, Label, Export, Title, Font,
} from 'devextreme-react/bar-gauge';

const values = [47.27, 65.32, 84.59, 71.86];

const format = {
  type: 'fixedPoint',
  precision: 1,
};

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'BarGauge' cannot be used as a JSX component.
      <BarGauge
        id="gauge"
        startValue={0}
        endValue={100}
        defaultValues={values}
      >
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label indent={30} format={format} customizeText={this.customizeText} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text={"Series' Ratings"}>
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </BarGauge>
    );
  }

  customizeText({ valueText }) {
    return `${valueText} %`;
  }
}

export default App;
