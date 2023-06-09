import React from 'react';
import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Crosshair,
  Export,
  Legend,
  Point,
  Label,
  Font,
  Title,
  Subtitle,
  Tooltip,
} from 'devextreme-react/chart';
import { energySources, countriesInfo } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={countriesInfo}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; type: string; argumentF... Remove this comment to see the full error message
          type="spline"
          argumentField="country"
        >
          // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
          <Point hoverMode="allArgumentPoints" />
        </CommonSeriesSettings>
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          energySources.map((item) => <Series
            key={item.value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={item.value}
            name={item.name} />)
        }
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis
          // @ts-expect-error TS(2322): Type '{ children: Element; valueMarginsEnabled: bo... Remove this comment to see the full error message
          valueMarginsEnabled={false}
          discreteAxisDivisionMode="crossLabels"
        >
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
        </ArgumentAxis>
        // @ts-expect-error TS(2786): 'Crosshair' cannot be used as a JSX component.
        <Crosshair
          // @ts-expect-error TS(2322): Type '{ children: Element; enabled: boolean; color... Remove this comment to see the full error message
          enabled={true}
          color="#949494"
          width={3}
          dashStyle="dot"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label
            // @ts-expect-error TS(2322): Type '{ children: Element; visible: boolean; backg... Remove this comment to see the full error message
            visible={true}
            backgroundColor="#949494"
          >
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font
              // @ts-expect-error TS(2322): Type '{ color: string; size: number; }' is not ass... Remove this comment to see the full error message
              color="#fff"
              size={12}
            />
          </Label>
        </Crosshair>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="bottom"
          equalColumnWidth={true}
        />
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Energy Consumption in 2004">
          // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
          <Subtitle text="(Millions of Tons, Oil Equivalent)" />
        </Title>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} />
      </Chart>
    );
  }
}

export default App;
