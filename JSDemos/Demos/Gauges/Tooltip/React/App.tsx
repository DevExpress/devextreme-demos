import React from 'react';
import {
  BarGauge, Label, Tooltip, Export, Title, Font, Legend,
} from 'devextreme-react/bar-gauge';

const values = [121.4, 135.4, 115.9, 141.1, 127.5];

class App extends React.Component {
  render() {
    return (
      <BarGauge
        id="gauge"
        startValue={0}
        endValue={200}
        defaultValues={values}
      >
        <Label visible={false} />
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip} />
        <Export enabled={true} />
        <Title text="Average Speed by Racer">
          <Font size={28} />
        </Title>
        <Legend visible={true} customizeText={this.customizeText} verticalAlignment="bottom" horizontalAlignment="center" />
      </BarGauge>
    );
  }

  customizeTooltip(arg: { valueText: any; }) {
    return {
      text: getText(arg, arg.valueText),
    };
  }

  customizeText(arg: { item: any; text: any; }) {
    return getText(arg.item, arg.text);
  }
}

function getText(item: { index: number; }, text) {
  return `Racer ${(item.index + 1)} - ${text} km/h`;
}

export default App;
