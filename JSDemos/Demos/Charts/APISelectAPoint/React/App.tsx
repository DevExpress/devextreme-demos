import React from 'react';
import Chart, {
  CommonSeriesSettings,
  Series,
  SelectionStyle,
  Hatching,
  Legend,
  Export,
} from 'devextreme-react/chart';
import { catBreedsData } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        dataSource={catBreedsData}
        rotated={true}
        onDone={onDone}
        onPointClick={onPointClick}
        title="Most Popular US Cat Breeds"
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings
          // @ts-expect-error TS(2322): Type '{ argumentField: string; type: string; }' is... Remove this comment to see the full error message
          argumentField="breed"
          type="bar"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ children: Element; valueField: string; nam... Remove this comment to see the full error message
          valueField="count"
          name="breeds"
          color="#a3d6d2"
        >
          // @ts-expect-error TS(2786): 'SelectionStyle' cannot be used as a JSX component... Remove this comment to see the full error message
          <SelectionStyle color="#ec2e7a">
            // @ts-expect-error TS(2786): 'Hatching' cannot be used as a JSX component.
            <Hatching direction="none" />
          </SelectionStyle>
        </Series>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
      </Chart>
    );
  }
}

function onDone({ component }) {
  component.getSeriesByPos(0).getPointsByArg('Siamese')[0].select();
}

function onPointClick({ target: point }) {
  if (point.isSelected()) {
    point.clearSelection();
  } else {
    point.select();
  }
}

export default App;
