import React, { useState } from 'react';
import PieChart, {
  Series,
  Legend,
} from 'devextreme-react/pie-chart';
import SelectBox from 'devextreme-react/select-box';
import { getPalette } from 'devextreme/viz/palette';
import {
  paletteCollection, paletteExtensionModes, dataSource, paletteLabel, paletteExtensionLabel,
} from './data.js';

const App = () => {
  const [palette, setPalette] = useState(paletteCollection[0]);
  const [extensionMode, setExtensionMode] = useState(paletteExtensionModes[1]);

  const handlePaletteChange = (e) => {
    setPalette(e.value);
  };

  const handleExtensionModeChange = (e) => {
    setExtensionMode(e.value);
  };

  return (
    <React.Fragment>
      <div className="flex-container">
        <PieChart
          id="pie"
          dataSource={dataSource}
          palette={palette}
          paletteExtensionMode={extensionMode.toLowerCase()}
        >
          <Legend visible={false} />
          <Series />
        </PieChart>

        <div className="palette-container flex-block">
          {getPalette(palette).simpleSet.map((color) => (
            <div
              className="palette-item"
              style={{ backgroundColor: color }}
              key={color}
            />
          ))}
        </div>
      </div>

      <div className="options">
        <div className="caption">Options</div>
        <div className="options-container">
          <div className="option">
            <span>Palette </span>
            <SelectBox
              items={paletteCollection}
              inputAttr={paletteLabel}
              defaultValue={palette}
              onValueChanged={handlePaletteChange}
            />
          </div>
          <div className="option">
            <span>Palette Extension Mode </span>
            <SelectBox
              items={paletteExtensionModes}
              inputAttr={paletteExtensionLabel}
              defaultValue={extensionMode}
              onValueChanged={handleExtensionModeChange}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
