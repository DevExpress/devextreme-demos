import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  Label,
  Format,
  ValueAxis,
  Legend,
  Export,
} from 'devextreme-react/chart';
import { exportData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={exportData}
        rotated={true}
        onPointClick={onPointClick}
        onLegendClick={onLegendClick}
        title="Economy - Export Change"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="country"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label visible={true}>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format
              // @ts-expect-error TS(2322): Type '{ precision: number; type: string; }' is not... Remove this comment to see the full error message
              precision={1}
              type="percent"
            />
          </Label>
        </CommonSeriesSettings>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="year2007"
          name="2007 - 2008"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; }' is no... Remove this comment to see the full error message
          valueField="year2008"
          name="2008 - 2009"
        />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
            <Format
              // @ts-expect-error TS(2322): Type '{ precision: number; type: string; }' is not... Remove this comment to see the full error message
              precision={1}
              type="percent"
            />
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

function onPointClick({ target: point }) {
  point.select();
}

function onLegendClick({ target: series }) {
  if (series.isVisible()) {
    series.hide();
  } else {
    series.show();
  }
}

export default App;
