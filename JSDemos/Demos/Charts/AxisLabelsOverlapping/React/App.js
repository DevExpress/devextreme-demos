import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  Legend,
  Label,
} from 'devextreme-react/chart';
import { overlappingModes, population, seriesTypeLabel } from './data.js';

const App = () => {
  const [currentMode, setCurrentMode] = useState(overlappingModes[0]);

  const handleChange = (e) => {
    setCurrentMode(e.value);
  };

  return (
    <React.Fragment>
      <Chart id="chart" dataSource={population} title="Population by Countries">
        <Series argumentField="country" />
        <ArgumentAxis>
          <Label wordWrap="none" overlappingBehavior={currentMode} />
        </ArgumentAxis>
        <Legend visible={false} />
      </Chart>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Overlapping Modes: </span>
          <SelectBox
            dataSource={overlappingModes}
            value={currentMode}
            inputAttr={seriesTypeLabel}
            onValueChanged={handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;