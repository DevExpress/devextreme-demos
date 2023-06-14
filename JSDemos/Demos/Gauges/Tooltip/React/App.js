import React from 'react';
import {
  BarGauge, Label, Tooltip, Export, Title, Font, Legend,
} from 'devextreme-react/bar-gauge';

const values = [121.4, 135.4, 115.9, 141.1, 127.5];

const App = () => {
  const customizeTooltip = (arg) => ({
    text: getText(arg, arg.valueText),
  });

  const customizeText = (arg) => getText(arg.item, arg.text);

  const getText = (item, text) => `Racer ${(item.index + 1)} - ${text} km/h`;

  return (
    <BarGauge
      id="gauge"
      startValue={0}
      endValue={200}
      defaultValues={values}
    >
      <Label visible={false} />
      <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
      <Export enabled={true} />
      <Title text="Average Speed by Racer">
        <Font size={28} />
      </Title>
      <Legend visible={true} customizeText={customizeText} verticalAlignment="bottom" horizontalAlignment="center" />
    </BarGauge>
  );
};

export default App;
