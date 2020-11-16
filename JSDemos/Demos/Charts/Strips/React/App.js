import React from 'react';

import {
  Chart,
  Series,
  Strip,
  StripStyle,
  Legend,
  ValueAxis,
  Label,
  Font,
  Export
} from 'devextreme-react/chart';
import { temperaturesData } from './data.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highAverage: 60.8,
      lowAverage: 53,
      highAverageColor: '#ff9b52',
      lowAverageColor: '#6199e6'
    };
    this.customizeLabel = this.customizeLabel.bind(this);
    this.customizePoint = this.customizePoint.bind(this);
  }

  render() {
    return (
      <Chart
        id="chart"
        title="Temperature in September"
        dataSource={temperaturesData}
        customizePoint={this.customizePoint}
        customizeLabel={this.customizeLabel}
      >
        <Series
          argumentField="day"
          valueField="temperature"
          type="spline"
          color="#a3aaaa"
        />
        <ValueAxis>
          <Label customizeText={this.customizeText} />
          <Strip startValue={this.state.highAverage} color="rgba(255,155,85,0.15)">
            <Label text="Above the Average">
              <Font color={this.state.highAverageColor} />
            </Label>
          </Strip>
          <Strip endValue={this.state.lowAverage} color="rgba(97,153,230,0.10)">
            <Label text="Below the Average">
              <Font color={this.state.lowAverageColor} />
            </Label>
          </Strip>
          <StripStyle>
            <Label>
              <Font weight="500" size="14" />
            </Label>
          </StripStyle>
        </ValueAxis>
        <Legend visible={false} />
        <Export enabled={true} />
      </Chart>
    );
  }

  customizePoint(arg) {
    if (arg.value > this.state.highAverage) {
      return { color: this.state.highAverageColor };
    } else if (arg.value < this.state.lowAverage) {
      return { color: this.state.lowAverageColor };
    }
  }

  customizeLabel(arg) {
    if (arg.value > this.state.highAverage) {
      return this.getLabelsSettings(this.state.highAverageColor);
    } else if (arg.value < this.state.lowAverage) {
      return this.getLabelsSettings(this.state.lowAverageColor);
    }
  }

  getLabelsSettings(backgroundColor) {
    return {
      visible: true,
      backgroundColor: backgroundColor,
      customizeText: this.customizeText
    };
  }

  customizeText(arg) {
    return `${arg.valueText}&#176F`;
  }
}

export default App;
