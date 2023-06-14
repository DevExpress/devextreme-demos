import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
} from 'devextreme-react/chart';

import { dataSource, seriesTypeLabel } from './data.js';

const types = ['area', 'stackedarea', 'fullstackedarea'];

const App = () => {
  const [type, setType] = useState(types[0]);

  const handleChange = (e) => {
    setType(e.value);
  };

  return (
    <div id="chart-demo">
      <Chart
        palette="Harmony Light"
        title="Population: Age Structure (2018)"
        dataSource={dataSource}
      >
        <CommonSeriesSettings argumentField="country" type={type} />
        <Series valueField="y1564" name="15-64 years" />
        <Series valueField="y014" name="0-14 years" />
        <Series valueField="y65" name="65 years and older" />
        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        <Export enabled={true} />
      </Chart>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Series Type </span>
          <SelectBox
            dataSource={types}
            value={type}
            inputAttr={seriesTypeLabel}
            onValueChanged={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
