import React from 'react';

import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

import Chart, {
  ValueAxis,
  ArgumentAxis,
  CommonPaneSettings,
  Grid,
  Series,
  Label,
  Legend,
  Size,
  Border,
  Tooltip,
  Export,
  LoadingIndicator,
} from 'devextreme-react/chart';

import SelectBox from 'devextreme-react/select-box';

import { months, monthLabel } from './data.js';

class App extends React.Component {
  chartDataSource: any;

  onValueChanged: any;

  constructor(props) {
    super(props);
    this.chartDataSource = new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
      },
      postProcess(results) {
        return results[0].DayItems;
      },
      expand: 'DayItems',
      filter: ['Id', '=', 1],
      paginate: false,
    });

    this.onValueChanged = (data) => {
      this.chartDataSource.filter(['Id', '=', data.value]);
      this.chartDataSource.load();
    };
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          title="Temperature in Seattle , 2017"
          dataSource={this.chartDataSource}>
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={420} />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis
            // @ts-expect-error TS(2322): Type '{ children: Element[]; valueType: string; }'... Remove this comment to see the full error message
            valueType="numeric"
          >
            // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
            <Grid opacity={0.2} />
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label customizeText={this.customizeLabel} />
          </ValueAxis>
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis type="discrete">
            // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
            <Grid visible={true} opacity={0.5} />
          </ArgumentAxis>
          // @ts-expect-error TS(2786): 'CommonPaneSettings' cannot be used as a JSX compo... Remove this comment to see the full error message
          <CommonPaneSettings>
            // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
            <Border
              // @ts-expect-error TS(2322): Type '{ visible: boolean; width: number; top: bool... Remove this comment to see the full error message
              visible={true}
              width={2}
              top={false}
              right={false}
            />
          </CommonPaneSettings>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
            argumentField="Number"
            valueField="Temperature"
            type="spline"
          />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (arg: ... Remove this comment to see the full error message
            enabled={true}
            customizeTooltip={customizeTooltip} />
          // @ts-expect-error TS(2786): 'LoadingIndicator' cannot be used as a JSX compone... Remove this comment to see the full error message
          <LoadingIndicator enabled={true} />
        </Chart>

        <div className="action">
          <div className="label">Choose a month:
          </div>
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            id="selectbox"
            width={150}
            valueExpr="id"
            inputAttr={monthLabel}
            displayExpr="name"
            items={months}
            defaultValue={1}
            onValueChanged={this.onValueChanged} />
        </div>
      </div>
    );
  }

  customizeLabel(e) {
    return `${e.valueText}${'&#176C'}`;
  }
}

function customizeTooltip(arg) {
  return {
    text: `${arg.valueText}${'&#176C'}`,
  };
}

export default App;
