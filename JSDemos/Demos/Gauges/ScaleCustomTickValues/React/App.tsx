import React from 'react';
import {
  LinearGauge, Geometry, Scale, Title, Font, Export,
} from 'devextreme-react/linear-gauge';

const customTicks = [0, 10, 25, 50];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
      <LinearGauge
        id="gauge"
        value={35}
      >
        // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
        <Geometry orientation="vertical" />
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={50} customTicks={customTicks} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Fuel Volume (in Liters)">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </LinearGauge>
    );
  }
}

export default App;
