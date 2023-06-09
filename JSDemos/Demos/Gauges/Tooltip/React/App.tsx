import React from 'react';
import {
  BarGauge, Label, Tooltip, Export, Title, Font, Legend,
} from 'devextreme-react/bar-gauge';

const values = [121.4, 135.4, 115.9, 141.1, 127.5];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'BarGauge' cannot be used as a JSX component.
      <BarGauge
        id="gauge"
        startValue={0}
        endValue={200}
        defaultValues={values}
      >
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label visible={false} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Average Speed by Racer">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={28} />
        </Title>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={true} customizeText={this.customizeText} verticalAlignment="bottom" horizontalAlignment="center" />
      </BarGauge>
    );
  }

  customizeTooltip(arg) {
    return {
      text: getText(arg, arg.valueText),
    };
  }

  customizeText(arg) {
    return getText(arg.item, arg.text);
  }
}

function getText(item, text) {
  return `Racer ${(item.index + 1)} - ${text} km/h`;
}

export default App;
