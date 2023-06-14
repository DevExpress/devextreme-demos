import React, { useState } from 'react';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import Chart, {
  ValueAxis,
  Label,
  Legend,
  Series,
  Size,
  Export,
  LoadingIndicator,
} from 'devextreme-react/chart';
import SelectBox from 'devextreme-react/select-box';

const temperatureLabel = { 'aria-label': 'Temperature' };

const App = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [monthWeather, setMonthWeather] = useState(
    new DataSource({
      store: new CustomStore({
        load: () => fetch('../../../../data/monthWeather.json')
          .then((e) => e.json())
          .catch(() => {
            throw new Error('Data Loading Error');
          }),
        loadMode: 'raw',
      }),
      filter: ['t', '>', '2'],
      paginate: false,
    }),
  );
  const temperature = [2, 4, 6, 8, 9, 10, 11];
  const palette = ['#c3a2cc', '#b7b5e0', '#e48cba'];

  const customizePoint = () => {
    const color = palette[paletteIndex];
    setPaletteIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    return { color };
  };

  const changeTemperature = (e) => {
    monthWeather.filter(['t', '>', e.value]);
    monthWeather.load();
  };

  const customizeLabel = (e) => `${e.valueText}${'&#176C'}`;

  return (
    <div id="chart-demo">
      <Chart
        title="Temperature in Seattle: October 2017"
        dataSource={monthWeather}
        customizePoint={customizePoint}
      >
        <Size height={420} />
        <ValueAxis>
          <Label customizeText={customizeLabel} />
        </ValueAxis>
        <Series argumentField="day" valueField="t" type="bar" />
        <Legend visible={false} />
        <Export enabled={true} />
        <LoadingIndicator enabled={true} />
      </Chart>
      <div className="action">
        <div className="label">Choose a temperature threshold, &deg;C:</div>
        <SelectBox
          id="choose-temperature"
          dataSource={temperature}
          inputAttr={temperatureLabel}
          defaultValue={2}
          onValueChanged={changeTemperature}
        />
      </div>
    </div>
  );
};

export default App;
