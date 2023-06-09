import React from 'react';
import { Slider, Label, Tooltip } from 'devextreme-react/slider';
import { NumberBox } from 'devextreme-react/number-box';

const sliderValueLabel = { 'aria-label': 'Slider Value' };

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = { sliderValue: 10 };
    this.setSliderValue = this.setSliderValue.bind(this);
  }

  render() {
    return (
      <div className="form">
        <div className="dx-fieldset">
          <div className="dx-field">
            <div className="dx-field-label">Default mode</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0} max={100} defaultValue={90} />
            </div>
          </div>
          <div className="dx-field custom-height-slider">
            <div className="dx-field-label">With labels</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0} max={100} defaultValue={50}>
                // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
                <Label visible={true} position="top" format={format} />
              </Slider>
            </div>
          </div>
          <div className="dx-field custom-height-slider">
            <div className="dx-field-label">With tooltip</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0} max={100} defaultValue={35}>
                // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
                <Tooltip enabled={true} showMode="always" position="bottom" format={format} />
              </Slider>
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Without range highlighting</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0} max={100} defaultValue={20} showRange={false} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">With discrete step</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0} max={100} defaultValue={10} step={10}>
                // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
                <Tooltip enabled={true} />
              </Slider>
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Disabled</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0} max={100} defaultValue={50} disabled={true} />
            </div>
          </div>
        </div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Process Value Changes</div>
          <div className="dx-field">
            <div className="dx-field-label">On handle movement</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0}
                max={100}
                value={this.state.sliderValue}
                // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
                onValueChanged={this.setSliderValue} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">On handle release</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
              <Slider min={0}
                max={100}
                value={this.state.sliderValue}
                valueChangeMode="onHandleRelease"
                // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
                onValueChanged={this.setSliderValue} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Slider value</div>
            <div className="dx-field-value">
              // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
              <NumberBox min={0}
                max={100}
                value={this.state.sliderValue}
                showSpinButtons={true}
                inputAttr={sliderValueLabel}
                // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
                onValueChanged={this.setSliderValue} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  setSliderValue({ value }) {
    this.setState({ sliderValue: value });
  }
}

function format(value) {
  return `${value}%`;
}

export default App;
