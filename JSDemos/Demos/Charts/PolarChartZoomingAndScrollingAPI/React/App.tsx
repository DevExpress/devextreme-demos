import React from 'react';

import PolarChart, {
  CommonSeriesSettings,
  Series,
  Point,
  ArgumentAxis,
  ValueAxis,
  Export,
  Legend,
} from 'devextreme-react/polar-chart';

import RangeSelector, {
  Size,
  Margin,
  Scale,
  MinorTick,
  Behavior,
} from 'devextreme-react/range-selector';
import { dataSource } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      visualRange: { startValue: 0, endValue: 8 },
    };

    this.updateVisualRange = this.updateVisualRange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'PolarChart' cannot be used as a JSX component.
        <PolarChart
          id="zoomedChart"
          dataSource={dataSource}
          title="Stochastic Process"
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings
            // @ts-expect-error TS(2322): Type '{ argumentField: string; closed: boolean; }'... Remove this comment to see the full error message
            argumentField="argument"
            closed={false}
          />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; type: string; name: str... Remove this comment to see the full error message
            type="scatter"
            name="Test results"
            valueField="value"
          >
            // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
            <Point size={8} />
          </Series>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; type: string; name: str... Remove this comment to see the full error message
            type="line"
            name="Expected average"
            valueField="originalValue"
          >
            // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
            <Point visible={false} />
          </Series>
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ startAngle: number; tickInterval: number; ... Remove this comment to see the full error message
            startAngle={90}
            tickInterval={30}
          />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis visualRange={this.state.visualRange} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend
            // @ts-expect-error TS(2322): Type '{ hoverMode: string; verticalAlignment: stri... Remove this comment to see the full error message
            hoverMode="excludePoints"
            verticalAlignment="top"
            horizontalAlignment="center"
          />
        </PolarChart>
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          onValueChanged={this.updateVisualRange}
        >
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={100} />
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin
            // @ts-expect-error TS(2322): Type '{ top: number; left: number; bottom: number;... Remove this comment to see the full error message
            top={10}
            left={60}
            bottom={10}
            right={50}
          />
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale
            // @ts-expect-error TS(2322): Type '{ children: Element; startValue: number; end... Remove this comment to see the full error message
            startValue={0}
            endValue={8}
            minorTickInterval={0.1}
            tickInterval={1}
          >
            // @ts-expect-error TS(2786): 'MinorTick' cannot be used as a JSX component.
            <MinorTick visible={false} />
          </Scale>
          // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
          <Behavior valueChangeMode="onHandleMove" />
        </RangeSelector>
      </React.Fragment>
    );
  }

  updateVisualRange(e) {
    this.setState({ visualRange: e.value });
  }
}

export default App;
