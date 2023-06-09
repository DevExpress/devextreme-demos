import React, { useState } from 'react';
import ColorBox from 'devextreme-react/color-box';

const App = () => {
  const [color, setColor] = useState('#f05b41');

  const handleColorChange = ({ value }) => setColor(value);

  return (
    <React.Fragment>
      <div className="form">
        <div className="dx-fieldset">
          <div className="dx-field">
            <div className="dx-field-label">Default mode</div>
            <div className="dx-field-value">
              <ColorBox
                defaultValue="#f05b41"
              />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">With alpha channel editing</div>
            <div className="dx-field-value">
              <ColorBox
                defaultValue="#f05b41"
                editAlphaChannel={true}
              />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Custom button captions</div>
            <div className="dx-field-value">
              <ColorBox
                defaultValue="#f05b41"
                applyButtonText="Apply"
                cancelButtonText="Decline"
              />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Read only</div>
            <div className="dx-field-value">
              <ColorBox
                defaultValue="#f05b41"
                readOnly={true}
              />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Disabled</div>
            <div className="dx-field-value">
              <ColorBox
                defaultValue="#f05b41"
                disabled={true}
              />
            </div>
          </div>
        </div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Event Handling</div>
          <div className="hero-block">
            <div className="color-block" style={{ backgroundColor: color }}>
              <div className="superhero"></div>
            </div>
            <div className="hero-color-box">
              <ColorBox
                value={color}
                applyValueMode="instantly"
                onValueChanged={handleColorChange}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;