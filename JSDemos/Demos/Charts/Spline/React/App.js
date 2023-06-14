import React, { useState } from 'react';
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

const App = () => {
  const [type, setType] = useState('spline');
  const types = ['spline', 'stackedspline', 'fullstackedspline'];

  const handleChange = (e) => {
    setType(e.value);
  };

  return (
    <React.Fragment>
      <Chart
        palette="Violet"
        dataSource={sharingStatisticsInfo}
        title="Architecture Share Over Time (Count)"
      >
        <CommonSeriesSettings
          argumentField="year"
          type={type}
        />
        <CommonAxisSettings>
          <Grid visible={true} />
        </CommonAxisSettings>
        {
          architectureSources.map((item) => <Series
            key={item.value}
            valueField={item.value}
            name={item.name} />)
        }
        <Margin bottom={20} />
        <ArgumentAxis
          allowDecimals={false}
          axisDivisionFactor={60}
        >
          <Label>
            <Format type="decimal" />
          </Label>
        </ArgumentAxis>
        <Legend
          verticalAlignment="top"
          horizontalAlignment="right"
        />
        <Export enabled={true} />
        <Tooltip enabled={true} />
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
    </React.Fragment>
  );
};

export default App;
