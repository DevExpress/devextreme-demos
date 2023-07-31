import React from 'react';
import { Slider, Label, Tooltip } from 'devextreme-react/slider';
import { NumberBox } from 'devextreme-react/number-box';

const sliderValueLabel = { 'aria-label': 'Slider Value' };

function App() {
  const [sliderValue, setSliderValue] = React.useState(10);

  const format = React.useCallback((value) => `${value}%`, []);

  return (
    <div className="form">
      <div className="dx-fieldset">
        <div className="dx-field">
          <div className="dx-field-label">Default mode</div>
          <div className="dx-field-value">
            <Slider min={0} max={100} defaultValue={90} />
          </div>
        </div>
        <div className="dx-field custom-height-slider">
          <div className="dx-field-label">With labels</div>
          <div className="dx-field-value">
            <Slider min={0} max={100} defaultValue={50}>
              <Label visible={true} position="top" format={format} />
            </Slider>
          </div>
        </div>
        <div className="dx-field custom-height-slider">
          <div className="dx-field-label">With tooltip</div>
          <div className="dx-field-value">
            <Slider min={0} max={100} defaultValue={35}>
              <Tooltip enabled={true} showMode="always" position="bottom" format={format} />
            </Slider>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Without range highlighting</div>
          <div className="dx-field-value">
            <Slider min={0} max={100} defaultValue={20} showRange={false} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">With discrete step</div>
          <div className="dx-field-value">
            <Slider min={0} max={100} defaultValue={10} step={10}>
              <Tooltip enabled={true} />
            </Slider>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Disabled</div>
          <div className="dx-field-value">
            <Slider min={0} max={100} defaultValue={50} disabled={true} />
          </div>
        </div>
      </div>
      <div className="dx-fieldset">
        <div className="dx-fieldset-header">Process Value Changes</div>
        <div className="dx-field">
          <div className="dx-field-label">On handle movement</div>
          <div className="dx-field-value">
            <Slider min={0}
              max={100}
              value={sliderValue}
              onValueChanged={({ value }) => setSliderValue(value)} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">On handle release</div>
          <div className="dx-field-value">
            <Slider min={0}
              max={100}
              value={sliderValue}
              valueChangeMode="onHandleRelease"
              onValueChanged={({ value }) => setSliderValue(value)} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Slider value</div>
          <div className="dx-field-value">
            <NumberBox min={0}
              max={100}
              value={sliderValue}
              showSpinButtons={true}
              inputAttr={sliderValueLabel}
              onValueChanged={({ value }) => setSliderValue(value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
