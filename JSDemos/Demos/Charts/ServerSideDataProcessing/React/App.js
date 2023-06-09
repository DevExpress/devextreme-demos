import React, { useState, useEffect } from 'react';
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

function App() {
  const [chartDataSource, setChartDataSource] = useState(null);

  useEffect(() => {
    const dataSource = new DataSource({
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
    setChartDataSource(dataSource);
  }, []);

  const onValueChanged = (data) => {
    chartDataSource.filter(['Id', '=', data.value]);
    chartDataSource.load();
  };

  const customizeLabel = (e) => {
    return `${e.valueText}${'&#176C'}`;
  };

  const customizeTooltip = (arg) => {
    return {
      text: `${arg.valueText}${'&#176C'}`,
    };
  };

  return (
    <div id="chart-demo">
      {chartDataSource && (
        <Chart title="Temperature in Seattle , 2017" dataSource={chartDataSource}>
          <Size height={420} />
          <ValueAxis valueType="numeric">
            <Grid opacity={0.2} />
            <Label customizeText={customizeLabel} />
          </ValueAxis>
          <ArgumentAxis type="discrete">
            <Grid visible={true} opacity={0.5} />
          </ArgumentAxis>
          <CommonPaneSettings>
            <Border visible={true} width={2} top={false} right={false} />
          </CommonPaneSettings>
          <Series argumentField="Number" valueField="Temperature" type="spline" />
          <Legend visible={false} />
          <Export enabled={true} />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          <LoadingIndicator enabled={true} />
        </Chart>
      )}

      <div className="action">
        <div className="label">Choose a month:</div>
        <SelectBox
          id="selectbox"
          width={150}
          valueExpr="id"
          inputAttr={monthLabel}
          displayExpr="name"
          items={months}
          defaultValue={1}
          onValueChanged={onValueChanged}
        />
      </div>
    </div>
  );
}

export default App;