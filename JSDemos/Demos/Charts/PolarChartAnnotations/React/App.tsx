import React from 'react';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  CommonAnnotationSettings,
  Annotation,
  ArgumentAxis,
  Strip,
  Legend,
} from 'devextreme-react/polar-chart';
import { dataSource, maxDay, minNight } from './data.js';

class App extends React.Component {
  maxTempText: any;

  minTempText: any;

  constructor(props) {
    super(props);

    this.maxTempText = `Highest temperature: ${maxDay.day} °C`;
    this.minTempText = `Lowest temperature: ${minNight.night} °C`;
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'PolarChart' cannot be used as a JSX component.
      <PolarChart
        id="radarChart"
        dataSource={dataSource}
        title="Average temperature in London"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ type: string; opacity: number; }' is not a... Remove this comment to see the full error message
          type="bar"
          opacity={0.75}
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; color: s... Remove this comment to see the full error message
          valueField="day"
          name="Day"
          color="#fdff5e"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; color: s... Remove this comment to see the full error message
          valueField="night"
          name="Night"
          color="#0f3b59"
        />
        // @ts-expect-error TS(2786): 'CommonAnnotationSettings' cannot be used as a JSX... Remove this comment to see the full error message
        <CommonAnnotationSettings
          // @ts-expect-error TS(2322): Type '{ opacity: number; arrowLength: number; type... Remove this comment to see the full error message
          opacity={0.7}
          arrowLength={0}
          type="text"
        />
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ angle: number; radius: number; text: strin... Remove this comment to see the full error message
          angle={45}
          radius={180}
          text="WINTER"
        />
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ angle: number; radius: number; text: strin... Remove this comment to see the full error message
          angle={135}
          radius={180}
          text="SPRING"
        />
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ angle: number; radius: number; text: strin... Remove this comment to see the full error message
          angle={225}
          radius={180}
          text="SUMMER"
        />
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ angle: number; radius: number; text: strin... Remove this comment to see the full error message
          angle={315}
          radius={180}
          text="FALL"
        />
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ argument: string; opacity: number; offsetX... Remove this comment to see the full error message
          argument={maxDay.arg}
          opacity={1}
          offsetX={105}
          paddingTopBottom={15}
          paddingLeftRight={15}
          text={this.maxTempText}
          series="Day"
        />
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ argument: string; opacity: number; offsetX... Remove this comment to see the full error message
          argument={minNight.arg}
          opacity={1}
          offsetX={105}
          paddingTopBottom={15}
          paddingLeftRight={15}
          text={this.minTempText}
          series="Night"
        />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis>
          // @ts-expect-error TS(2786): 'Strip' cannot be used as a JSX component.
          <Strip
            // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: string; end... Remove this comment to see the full error message
            startValue="December"
            endValue="February"
            color="#0076d1">
          </Strip>
          // @ts-expect-error TS(2786): 'Strip' cannot be used as a JSX component.
          <Strip
            // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: string; end... Remove this comment to see the full error message
            startValue="March"
            endValue="May"
            color="#3ca3b0">
          </Strip>
          // @ts-expect-error TS(2786): 'Strip' cannot be used as a JSX component.
          <Strip
            // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: string; end... Remove this comment to see the full error message
            startValue="June"
            endValue="August"
            color="#3fbc1e">
          </Strip>
          // @ts-expect-error TS(2786): 'Strip' cannot be used as a JSX component.
          <Strip
            // @ts-expect-error TS(2322): Type '{ children: never[]; startValue: string; end... Remove this comment to see the full error message
            startValue="September"
            endValue="November"
            color="#f0bb00">
          </Strip>
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ horizontalAlignment: string; verticalAlign... Remove this comment to see the full error message
          horizontalAlignment="center"
          verticalAlignment="bottom"
        />
      </PolarChart>
    );
  }
}

export default App;
