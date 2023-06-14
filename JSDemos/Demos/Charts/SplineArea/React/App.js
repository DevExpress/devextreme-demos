import React, { useState } from 'react';
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

const App = () => {
  const [type, setType] = useState(types[0]);

  const handleChange = (e) => {
    setType(e.value);
  };

  return (
    <div id="chart-demo">
      <Chart
        palette="Harmony Light"
        title="Corporations with Highest Market Value"
        dataSource={dataSource}>
        <CommonSeriesSettings argumentField="company" type={type} />
        <Series valueField="y2005" name="2005"></Series>
        <Series valueField="y2004" name="2004"></Series>
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        <Margin bottom={20} />
        <Export enabled={true} />
      </Chart>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Series Type </span>
          <SelectBox
            dataSource={types}
            inputAttr={seriesTypeLabel}
            value={type}
            onValueChanged={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
