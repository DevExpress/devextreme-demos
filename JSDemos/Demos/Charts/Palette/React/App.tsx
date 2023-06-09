import React from 'react';

import PieChart, {
  Series,
  Legend,
} from 'devextreme-react/pie-chart';
import SelectBox from 'devextreme-react/select-box';
import { getPalette } from 'devextreme/viz/palette';
import {
  paletteCollection, paletteExtensionModes, dataSource, paletteLabel, paletteExtensionLabel,
} from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      palette: paletteCollection[0],
      extensionMode: paletteExtensionModes[1],
    };

    this.setPalette = this.setPalette.bind(this);
    this.setExtensionMode = this.setExtensionMode.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
          <PieChart
            id="pie"
            dataSource={dataSource}
            palette={this.state.palette}
            paletteExtensionMode={this.state.extensionMode.toLowerCase()}
          >
            // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
            <Legend visible={false} />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series />
          </PieChart>

          <div className="palette-container flex-block">
            {getPalette(this.state.palette).simpleSet.map((color) => (
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
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                items={paletteCollection}
                inputAttr={paletteLabel}
                defaultValue={this.state.palette}
                onValueChanged={this.setPalette}
              />
            </div>
            <div className="option">
              <span>Palette Extension Mode </span>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                items={paletteExtensionModes}
                inputAttr={paletteExtensionLabel}
                defaultValue={this.state.extensionMode}
                onValueChanged={this.setExtensionMode}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  setPalette(e) {
    this.setState({
      palette: e.value,
    });
  }

  setExtensionMode(e) {
    this.setState({
      extensionMode: e.value,
    });
  }
}

export default App;
