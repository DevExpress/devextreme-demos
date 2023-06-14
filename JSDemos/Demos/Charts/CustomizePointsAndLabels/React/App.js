import React, { useState } from 'react';
import {
  Chart,
  Series,
  Legend,
  ValueAxis,
  VisualRange,
  Label,
  ConstantLine,
  Export,
} from 'devextreme-react/chart';
import { temperaturesData } from './data.js';

function App() {
  const [highAverage, setHighAverage] = useState(77);
  const [lowAverage, setLowAverage] = useState(58);

  const customizePoint = (arg) => {
    if (arg.value > highAverage) {
      return { color: '#ff7c7c', hoverStyle: { color: '#ff7c7c' } };
    }
    if (arg.value < lowAverage) {
      return { color: '#8c8cff', hoverStyle: { color: '#8c8cff' } };
    }
    return null;
  };

  const customizeLabel = (arg) => {
    if (arg.value > highAverage) {
      return {
        visible: true,
        backgroundColor: '#ff7c7c',
        customizeText(e) {
          return `${e.valueText}&#176F`;
        },
      };
    }
    return null;
  };

  const customizeText = (arg) => `${arg.valueText}&#176F`;

  return (
    <Chart
      id="chart"
      title="Daily Temperature in May"
      dataSource={temperaturesData}
      customizePoint={customizePoint}
      customizeLabel={customizeLabel}
    >
      <Series
        argumentField="day"
        valueField="value"
        type="bar"
        color="#e7d19a"
      />
      <ValueAxis maxValueMargin={0.01}>
        <VisualRange startValue={40} />
        <Label customizeText={customizeText} />
        <ConstantLine
          width={2}
          value={lowAverage}
          color="#8c8cff"
          dashStyle="dash"
        >
          <Label text="Low Average" />
        </ConstantLine>
        <ConstantLine
          width={2}
          value={highAverage}
          color="#ff7c7c"
          dashStyle="dash"
        >
          <Label text="High Average" />
        </ConstantLine>
      </ValueAxis>
      <Legend visible={false} />
      <Export enabled={true} />
    </Chart>
  );
}

export default App;
