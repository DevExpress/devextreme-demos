import React from 'react';

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

class App extends React.Component {
  changeTemperature: any;

  customizePoint: any;

  monthWeather: any;

  palette: any;

  paletteIndex: any;

  temperature: any;

  constructor(props) {
    super(props);
    this.temperature = [2, 4, 6, 8, 9, 10, 11];
    this.palette = ['#c3a2cc', '#b7b5e0', '#e48cba'];
    this.paletteIndex = 0;
    this.monthWeather = new DataSource({
      store: new CustomStore({
        load: () => fetch('../../../../data/monthWeather.json')
          .then((e) => e.json())
          .catch(() => { throw new Error('Data Loading Error'); }),
        loadMode: 'raw',
      }),
      filter: ['t', '>', '2'],
      paginate: false,
    });

    this.customizePoint = () => {
      const color = this.palette[this.paletteIndex];
      this.paletteIndex = this.paletteIndex === 2 ? 0 : this.paletteIndex + 1;

      return { color };
    };

    this.changeTemperature = (e) => {
      this.monthWeather.filter(['t', '>', e.value]);
      this.monthWeather.load();
    };
  }

  customizeLabel(e) {
    return `${e.valueText}${'&#176C'}`;
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          title="Temperature in Seattle: October 2017"
          dataSource={this.monthWeather}
          customizePoint={this.customizePoint}>
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={420} />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis>
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label customizeText={this.customizeLabel} />
          </ValueAxis>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
            argumentField="day"
            valueField="t"
            type="bar"
          />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'LoadingIndicator' cannot be used as a JSX compone... Remove this comment to see the full error message
          <LoadingIndicator enabled={true} />
        </Chart>
        <div className="action">
          <div className="label">Choose a temperature threshold, &deg;C:
          </div>
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            id="choose-temperature"
            dataSource={this.temperature}
            inputAttr={temperatureLabel}
            defaultValue={2}
            onValueChanged={this.changeTemperature} />
        </div>
      </div>
    );
  }
}

export default App;
