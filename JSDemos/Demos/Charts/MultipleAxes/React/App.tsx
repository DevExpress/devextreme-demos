import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  ValueAxis,
  Export,
  Legend,
  Tooltip,
  Title,
  Grid,
  Format,
} from 'devextreme-react/chart';
import { continentSources, populationData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        palette="Vintage"
        dataSource={populationData}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; }' is... Remove this comment to see the full error message
          argumentField="year"
          type="fullstackedbar"
        />
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          continentSources.map((item) => <Series
            key={item.value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={item.value}
            name={item.name} />)
        }
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ axis: string; type: string; valueField: st... Remove this comment to see the full error message
          axis="total"
          type="spline"
          valueField="total"
          name="Total"
          color="#008fd8"
        />

        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis>
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis
          // @ts-expect-error TS(2322): Type '{ children: Element; name: string; position:... Remove this comment to see the full error message
          name="total"
          position="right"
          title="Total Population, billions"
        >
          // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
          <Grid visible={true} />
        </ValueAxis>

        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip
          // @ts-expect-error TS(2322): Type '{ children: Element; enabled: boolean; share... Remove this comment to see the full error message
          enabled={true}
          shared={true}
          customizeTooltip={customizeTooltip}
        >
          // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
          <Format
            // @ts-expect-error TS(2322): Type '{ type: string; precision: number; }' is not... Remove this comment to see the full error message
            type="largeNumber"
            precision={1}
          />
        </Tooltip>
        // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
        <Title text="Evolution of Population by Continent" />
      </Chart>
    );
  }
}

function customizeTooltip(pointInfo) {
  const items = pointInfo.valueText.split('\n');
  const color = pointInfo.point.getColor();

  items.forEach((item, index) => {
    if (item.indexOf(pointInfo.seriesName) === 0) {
      const element = document.createElement('span');

      element.textContent = item;
      element.style.color = color;
      element.className = 'active';

      items[index] = element.outerHTML;
    }
  });

  return { text: items.join('\n') };
}

export default App;
