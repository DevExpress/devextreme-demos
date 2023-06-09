import React from 'react';
import {
  LinearGauge, Scale, MinorTick, Export, Title, Font,
} from 'devextreme-react/linear-gauge';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
      <LinearGauge
        id="gauge"
        value={4.3}
      >
        // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
        <Scale startValue={0} endValue={5} tickInterval={2.5} minorTickInterval={0.625}>
          // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
          <MinorTick visible={true} />
        </Scale>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="TV Show Rating">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
      </LinearGauge>
    );
  }
}

export default App;
