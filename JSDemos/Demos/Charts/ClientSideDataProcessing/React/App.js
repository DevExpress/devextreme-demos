import React from 'react';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import Chart, { ValueAxis, Label, Legend, Series, Size, Export, LoadingIndicator } from 'devextreme-react/chart';
import SelectBox from 'devextreme-react/select-box';

const temperatureLabel = { 'aria-label': 'Temperature' };

function customizeLabel(e) {
  return `${e.valueText}${'&#176C'}`;
}

function App() {
  const [temperature, setTemperature] = React.useState([2, 4, 6, 8, 9, 10, 11]);
  const [paletteIndex, setPaletteIndex] = React.useState(0);
  const [monthWeather, setMonthWeather] = React.useState(null);

  const palette = ['#c3a2cc', '#b7b5e0', '#e48cba'];

  const customizePoint = React.useCallback(() => {
    const color = palette[paletteIndex];
    setPaletteIndex(paletteIndex === 2 ? 0 : paletteIndex + 1);
    return { color };
  }, [palette, paletteIndex, setPaletteIndex]);

  const changeTemperature = React.useCallback((e) => {
    monthWeather.filter(['t', '>', e.value]);
    monthWeather.load();
  }, [monthWeather]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../../data/monthWeather.json');
        const data = await response.json();
        setMonthWeather(
          new DataSource({
            store: new CustomStore({
              load: () => Promise.resolve(data),
              loadMode: 'raw',
            }),
            filter: ['t', '>', '2'],
            paginate: false,
          })
        );
      } catch (error) {
        throw new Error('Data Loading Error');
      }
    };

    fetchData();
  }, []);

  return (
    <div id="chart-demo">
      {monthWeather && (
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
      )}
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
