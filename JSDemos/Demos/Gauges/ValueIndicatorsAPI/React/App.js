import React, { useState, useRef, useEffect } from 'react';
import {
  CircularGauge, Scale, Label, Tooltip, Title, Font,
} from 'devextreme-react/circular-gauge';
import { NumberBox } from 'devextreme-react/number-box';
import { Button } from 'devextreme-react/button';

const mainGeneratorLabel = { 'aria-label': 'Main Generator' };
const additionalGeneratorOneLabel = { 'aria-label': 'Additional Generator One' };
const additionalGeneratorTwoLabel = { 'aria-label': 'Additional Generator Two' };

function App() {
  const [mainGeneratorValue, setMainGeneratorValue] = useState(34);
  const [additionalGenerator1Value, setAdditionalGenerator1Value] = useState(12);
  const [additionalGenerator2Value, setAdditionalGenerator2Value] = useState(23);
  const gaugeRef = useRef(null);

  const updateValues = () => {
    const gauge = gaugeRef.current.instance;
    gauge.value(mainGeneratorValue);
    gauge.subvalues([additionalGenerator1Value, additionalGenerator2Value]);
  };

  useEffect(() => {
    updateValues();
  }, []);

  const customizeText = ({ valueText }) => {
    return `${valueText} kV`;
  };

  return (
    <div id="gauge-demo">
      <div className="widget-container">
        <CircularGauge
          id="gauge"
          ref={gaugeRef}
        >
          <Scale startValue={10} endValue={40} tickInterval={5}>
            <Label customizeText={customizeText} />
          </Scale>
          <Tooltip enabled={true} />
          <Title text="Generators Voltage (kV)">
            <Font size={28} />
          </Title>
        </CircularGauge>
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Main generator</span>&nbsp;
          <NumberBox
            id="main-generator"
            value={mainGeneratorValue}
            onValueChanged={(e) => setMainGeneratorValue(e.value)}
            min={10}
            max={40}
            width={100}
            showSpinButtons={true}
            inputAttr={mainGeneratorLabel}
          />
        </div>
        <div className="option">
          <span>Additional generator 1</span>&nbsp;
          <NumberBox
            id="additional-generator-one"
            value={additionalGenerator1Value}
            onValueChanged={(e) => setAdditionalGenerator1Value(e.value)}
            min={10}
            max={40}
            width={100}
            showSpinButtons={true}
            inputAttr={additionalGeneratorOneLabel}
          />
        </div>
        <div className="option">
          <span>Additional generator 2</span>&nbsp;
          <NumberBox
            id="additional-generator-two"
            value={additionalGenerator2Value}
            onValueChanged={(e) => setAdditionalGenerator2Value(e.value)}
            min={10}
            max={40}
            width={100}
            showSpinButtons={true}
            inputAttr={additionalGeneratorTwoLabel}
          />
        </div>
        <div className="option">
          <Button
            id="edit"
            width={100}
            text="Apply"
            onClick={updateValues}
          />
        </div>
      </div>
    </div>
  );
}

export default App;