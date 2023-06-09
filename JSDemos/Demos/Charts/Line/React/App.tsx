import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Grid,
} from 'devextreme-react/chart';
import service from './data.js';

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();
const types = ['line', 'stackedline', 'fullstackedline'];
const seriesTypeLabel = { 'aria-label': 'Series Type' };

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          palette="Violet"
          dataSource={countriesInfo}
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings
            // @ts-expect-error TS(2322): Type '{ argumentField: string; type: any; }' is no... Remove this comment to see the full error message
            argumentField="country"
            type={this.state.type}
          />
          {
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            energySources.map((item) => <Series
              key={item.value}
              // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
              valueField={item.value}
              name={item.name} />)
          }
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin bottom={20} />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ children: Element; valueMarginsEnabled: bo... Remove this comment to see the full error message
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
            <Grid visible={true} />
          </ArgumentAxis>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend
            // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="bottom"
          />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Energy Consumption in 2004">
            // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
            <Subtitle text="(Millions of Tons, Oil Equivalent)" />
          </Title>
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true} />
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
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ type: e.value });
  }
}

export default App;
