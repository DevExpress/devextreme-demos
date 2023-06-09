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

class App extends React.Component {
  value: any;

  valueText: any;

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={iceHockeyStatistics}
        title={'Canadian Men’s National Ice Hockey Team\n at the World Championships'}
        customizePoint={this.customizePoint}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="year"
          valueField="place"
          type="spline"
        >
          // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
          <Point visible={false} />
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series color="#888888" />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis
          // @ts-expect-error TS(2322): Type '{ children: Element[]; allowDecimals: boolea... Remove this comment to see the full error message
          allowDecimals={false}
          axisDivisionFactor={60}
        >
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format type="decimal" />
          </Label>
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis inverted={true}>
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={false} />
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label customizeText={this.customizeText} />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; formats: string[]; }' is... Remove this comment to see the full error message
          enabled={true}
          formats={exportFormats}
        />
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
      </Chart>
    );
  }

  customizePoint() {
    if (this.value === 1) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-gold.png', width: 20, height: 20 }, visible: true };
    }
    if (this.value === 2) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-silver.png', width: 20, height: 20 }, visible: true };
    }
    if (this.value === 3) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-bronse.png', width: 20, height: 20 }, visible: true };
    }
    return null;
  }

  customizeText() {
    if (this.valueText === '1') {
      return `${this.valueText}st place`;
    } if (this.valueText === '2') {
      return `${this.valueText}nd place`;
    } if (this.valueText === '3') {
      return `${this.valueText}rd place`;
    }
    return `${this.valueText}th place`;
  }
}

export default App;
