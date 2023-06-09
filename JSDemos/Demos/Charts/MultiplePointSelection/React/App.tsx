import React from 'react';
import Chart, {
  CommonSeriesSettings,
  SelectionStyle,
  Hatching,
  Series,
  Legend,
  Export,
} from 'devextreme-react/chart';
import { medalSources, medalStatistics } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={medalStatistics}
        rotated={true}
        pointSelectionMode="multiple"
        onPointClick={onPointClick}
        title="Olympic Medals in 2008"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
          argumentField="country"
          type="stackedbar"
        >
          // @ts-expect-error TS(2786): 'SelectionStyle' cannot be used as a JSX component... Remove this comment to see the full error message
          <SelectionStyle>
            // @ts-expect-error TS(2786): 'Hatching' cannot be used as a JSX component.
            <Hatching direction="left" />
          </SelectionStyle>
        </CommonSeriesSettings>
        {
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          medalSources.map(({ value, name, color }) => <Series
            key={value}
            // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
            valueField={value}
            name={name}
            color={color} />)
        }
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
  if (point.isSelected()) {
    point.clearSelection();
  } else {
    point.select();
  }
}

export default App;
