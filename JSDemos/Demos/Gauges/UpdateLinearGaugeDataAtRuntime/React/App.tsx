import React from 'react';
import {
  LinearGauge, Title, Font, Geometry, Scale, RangeContainer, Range, ValueIndicator, Label,
} from 'devextreme-react/linear-gauge';
import { SelectBox } from 'devextreme-react/select-box';
import { cities, cityLabel } from './data.js';

const customTicks = [900, 1000, 1020, 1100];

const pressureLabelFormat = {
  type: 'decimal',
};

class App extends React.Component {
  onSelectionChanged: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      selectBoxValue: cities[0].data,
      temperature: cities[0].data.temperature,
      humidity: cities[0].data.humidity,
      pressure: cities[0].data.pressure,
    };

    this.onSelectionChanged = (e) => {
      const weatherData = e.selectedItem.data;
      this.setState({
        selectBoxValue: weatherData,
        temperature: weatherData.temperature,
        humidity: weatherData.humidity,
        pressure: weatherData.pressure,
      });
    };
  }

  render() {
    const temperatureGaugeStartValue = -40;
    return (
      <div>
        <div className="long-title">
          <h3>Weather Indicators</h3>
        </div>
        <div id="gauge-demo">
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            className="gauge-element"
            value={this.state.temperature}
          >
            // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
            <Title text="Temperature (°C)">
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font size={16} />
            </Title>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry orientation="vertical" />
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale startValue={temperatureGaugeStartValue} endValue={40} tickInterval={40} />
            // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
            <RangeContainer backgroundColor="none">
              // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
              <Range startValue={temperatureGaugeStartValue} endValue={0} color="#679EC5" />
              // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
              <Range startValue={0} endValue={40} />
            </RangeContainer>
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            className="gauge-element"
            value={this.state.humidity}
          >
            // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
            <Title text="Humidity (%)">
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font size={16} />
            </Title>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry orientation="vertical" />
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale startValue={0} endValue={100} tickInterval={10} />
            // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
            <RangeContainer backgroundColor="#CACACA" />
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator type="rhombus" color="#A4DDED" />
          </LinearGauge>
          // @ts-expect-error TS(2786): 'LinearGauge' cannot be used as a JSX component.
          <LinearGauge
            className="gauge-element"
            value={this.state.pressure}
          >
            // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
            <Title text="Barometric Pressure (mb)">
              // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
              <Font size={16} />
            </Title>
            // @ts-expect-error TS(2786): 'Geometry' cannot be used as a JSX component.
            <Geometry orientation="vertical" />
            // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
            <Scale startValue={900} endValue={1100} customTicks={customTicks}>
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label format={pressureLabelFormat} />
            </Scale>
            // @ts-expect-error TS(2786): 'RangeContainer' cannot be used as a JSX component... Remove this comment to see the full error message
            <RangeContainer>
              // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
              <Range startValue={900} endValue={1000} color="#679EC5" />
              // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
              <Range startValue={1000} endValue={1020} color="#A6C567" />
              // @ts-expect-error TS(2786): 'Range' cannot be used as a JSX component.
              <Range startValue={1020} endValue={1100} color="#E18E92" />
            </RangeContainer>
            // @ts-expect-error TS(2786): 'ValueIndicator' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValueIndicator type="circle" color="#E3A857" />
          </LinearGauge>
        </div>
        // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
        <SelectBox
          dataSource={cities}
          valueExpr="data"
          inputAttr={cityLabel}
          value={this.state.selectBoxValue}
          displayExpr="name"
          onSelectionChanged={this.onSelectionChanged}
        />
      </div>
    );
  }
}

export default App;
