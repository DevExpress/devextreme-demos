import React from 'react';
import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Label,
  Format,
  ValueAxis,
  Export,
  Legend,
  Point,
} from 'devextreme-react/chart';
import { iceHockeyStatistics } from './data.js';

const exportFormats = ['PNG', 'PDF', 'JPEG', 'GIF', 'SVG'];

const App = () => {

  const customizePoint = (pointInfo) => {
    if (pointInfo.value === 1) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-gold.png', width: 20, height: 20 }, visible: true };
    }
    if (pointInfo.value === 2) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-silver.png', width: 20, height: 20 }, visible: true };
    }
    if (pointInfo.value === 3) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-bronse.png', width: 20, height: 20 }, visible: true };
    }
    return null;
  }

  const customizeText = (labelInfo) => {
    if (labelInfo.valueText === '1') {
      return `${labelInfo.valueText}st place`;
    } if (labelInfo.valueText === '2') {
      return `${labelInfo.valueText}nd place`;
    } if (labelInfo.valueText === '3') {
      return `${labelInfo.valueText}rd place`;
    }
    return `${labelInfo.valueText}th place`;
  }

  return (
    <Chart
      id="chart"
      dataSource={iceHockeyStatistics}
      title={'Canadian Men’s National Ice Hockey Team\n at the World Championships'}
      customizePoint={customizePoint}
    >
      <CommonSeriesSettings
        argumentField="year"
        valueField="place"
        type="spline"
      >
        <Point visible={false} />
      </CommonSeriesSettings>
      <Series color="#888888" />
      <ArgumentAxis
        allowDecimals={false}
        axisDivisionFactor={60}
      >
        <Grid visible={true} />
        <Label>
          <Format type="decimal" />
        </Label>
      </ArgumentAxis>
      <ValueAxis inverted={true}>
        <Grid visible={false} />
        <Label customizeText={customizeText} />
      </ValueAxis>
      <Export
        enabled={true}
        formats={exportFormats}
      />
      <Legend visible={false} />
    </Chart>
  );
}

export default App;