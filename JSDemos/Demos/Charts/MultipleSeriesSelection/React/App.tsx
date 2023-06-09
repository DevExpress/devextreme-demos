import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  CommonAxisSettings,
  ArgumentAxis,
  ValueAxis,
  Label,
  Format,
  Legend,
  Export,
} from 'devextreme-react/chart';
import { versionSources, statisticsData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={statisticsData}
        seriesSelectionMode="multiple"
        onSeriesClick={onSeriesClick}
        title="Internet Explorer Statistics"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; }' is... Remove this comment to see the full error message
          argumentField="year"
          type="stackedarea"
        />
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          versionSources.map(({ value, name }) => <Series
            key={value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={value}
            name={name} />)
        }
        // @ts-expect-error TS(2786): 'CommonAxisSettings' cannot be used as a JSX compo... Remove this comment to see the full error message
        <CommonAxisSettings valueMarginsEnabled={false} />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis type="discrete" />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format type="percent" />
          </Label>
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend
          // @ts-expect-error TS(2322): Type '{ children: never[]; verticalAlignment: stri... Remove this comment to see the full error message
          verticalAlignment="bottom"
          horizontalAlignment="center">
        </Legend>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }
}

function onSeriesClick({ target: series }) {
  if (series.isSelected()) {
    series.clearSelection();
  } else {
    series.select();
  }
}

export default App;
