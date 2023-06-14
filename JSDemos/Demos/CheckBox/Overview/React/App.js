import React, { useState } from 'react';
import { CheckBox } from 'devextreme-react/check-box';

function App() {
  const [checkBoxValue, setCheckBoxValue] = useState(null);

  const onValueChanged = (args) => {
    setCheckBoxValue(args.value);
  };

  return (
    <div className="form">
      <div className="dx-fieldset">
        <div className="dx-field">
          <div className="dx-field-label">Checked</div>
          <div className="dx-field-value">
            <CheckBox defaultValue={true} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Unchecked</div>
          <div className="dx-field-value">
            <CheckBox defaultValue={false} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Indeterminate</div>
          <div className="dx-field-value">
            <CheckBox defaultValue={null} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Three state mode</div>
          <div className="dx-field-value">
            <CheckBox
              enableThreeStateBehavior={true}
              defaultValue={null}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Handle value change</div>
          <div className="dx-field-value">
            <CheckBox value={checkBoxValue} onValueChanged={onValueChanged} />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Disabled</div>
          <div className="dx-field-value">
            <CheckBox
              disabled={true}
              value={checkBoxValue}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Custom size</div>
          <div className="dx-field-value">
            <CheckBox
              defaultValue={null}
              iconSize={30}
            />
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">With label</div>
          <div className="dx-field-value">
            <CheckBox
              defaultValue={true}
              text="Label"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
