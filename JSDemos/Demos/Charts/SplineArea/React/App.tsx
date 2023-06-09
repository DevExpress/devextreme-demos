import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Margin,
  Export,
  Legend,
} from 'devextreme-react/chart';

import { dataSource, seriesTypeLabel } from './data.js';

const types = ['splinearea', 'stackedsplinearea', 'fullstackedsplinearea'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      type: types[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      type: e.value,
    });
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          palette="Harmony Light"
          title="Corporations with Highest Market Value"
          dataSource={dataSource}>
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings
            // @ts-expect-error TS(2322): Type '{ argumentField: string; type: any; }' is no... Remove this comment to see the full error message
            argumentField="company"
            type={this.state.type}
          />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series valueField="y2005" name="2005"></Series>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series valueField="y2004" name="2004"></Series>
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis valueMarginsEnabled={false} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend
            // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
            verticalAlignment="bottom"
            horizontalAlignment="center"
          />
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin bottom={20} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Series Type </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={types}
              inputAttr={seriesTypeLabel}
              value={this.state.type}
              onValueChanged={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
