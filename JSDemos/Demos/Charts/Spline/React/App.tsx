import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  Export,
  Legend,
  Margin,
  Tooltip,
  Label,
  Format,
} from 'devextreme-react/chart';
import { architectureSources, sharingStatisticsInfo, seriesTypeLabel } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  types: any;

  constructor(props) {
    super(props);
    this.state = {
      type: 'spline',
    };
    this.types = ['spline', 'stackedspline', 'fullstackedspline'];
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          palette="Violet"
          dataSource={sharingStatisticsInfo}
          title="Architecture Share Over Time (Count)"
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings
            // @ts-expect-error TS(2322): Type '{ argumentField: string; type: any; }' is no... Remove this comment to see the full error message
            argumentField="year"
            type={this.state.type}
          />
          // @ts-expect-error TS(2786): 'CommonAxisSettings' cannot be used as a JSX compo... Remove this comment to see the full error message
          <CommonAxisSettings>
            // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
            <Grid visible={true} />
          </CommonAxisSettings>
          {
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            architectureSources.map((item) => <Series
              key={item.value}
              // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
              valueField={item.value}
              name={item.name} />)
          }
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin bottom={20} />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ children: Element; allowDecimals: boolean;... Remove this comment to see the full error message
            allowDecimals={false}
            axisDivisionFactor={60}
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label>
              // @ts-expect-error TS(2786): 'Format' cannot be used as a JSX component.
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend
            // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
            verticalAlignment="top"
            horizontalAlignment="right"
          />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Series Type </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={this.types}
              inputAttr={seriesTypeLabel}
              value={this.state.type}
              onValueChanged={this.handleChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ type: e.value });
  }
}

export default App;
