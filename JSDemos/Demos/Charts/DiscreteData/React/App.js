import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Margin,
} from 'devextreme-react/polar-chart';
import { types, dataSource, seriesTypeLabel } from './data.js';

const App = () => {
  const [currentType, setCurrentType] = useState(types[0]);

  const handleChange = (e) => {
    setCurrentType(e.value);
  };

  return (
    <React.Fragment>
      <div className="long-title">
        <h3>Average temperature in London</h3>
      </div>
      <div id="chart-demo">
        <PolarChart id="radarChart" dataSource={dataSource}>
          <CommonSeriesSettings type={currentType} />
          <Series valueField="day" name="Day" color="#ba4d51" />
          <Series valueField="night" name="Night" color="#5f8b95" />
          <Margin top={50} bottom={50} left={100} />
        </PolarChart>
        <div className="center">
          <div>Series Type</div>&nbsp;&nbsp;
          <SelectBox
            width={200}
            inputAttr={seriesTypeLabel}
            dataSource={types}
            value={currentType}
            onValueChanged={handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;