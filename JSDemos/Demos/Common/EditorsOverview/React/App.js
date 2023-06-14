import React, { useState } from 'react';

import ColorBox from 'devextreme-react/color-box';
import NumberBox from 'devextreme-react/number-box';
import SelectBox from 'devextreme-react/select-box';
import Switch from 'devextreme-react/switch';
import TextBox from 'devextreme-react/text-box';

import Logo from './Logo.js';

const widthLabel = { 'aria-label': 'Width' };
const heightLabel = { 'aria-label': 'Height' };
const titleLabel = { 'aria-label': 'Title' };
const transformLabel = { 'aria-label': 'Transform' };

const noFlipTransform = 'scaleX(1)';
const transformations = [
  {
    key: 'Flip',
    items: [
      { name: '0 degrees', value: noFlipTransform },
      { name: '180 degrees', value: 'scaleX(-1)' },
    ],
  },
  {
    key: 'Rotate',
    items: [
      { name: '0 degrees', value: 'rotate(0)' },
      { name: '15 degrees', value: 'rotate(15deg)' },
      { name: '30 degrees', value: 'rotate(30deg)' },
      { name: '-15 degrees', value: 'rotate(-15deg)' },
      { name: '-30 degrees', value: 'rotate(-30deg)' },
    ],
  },
];

const App = () => {
  const [state, setState] = useState({
    text: 'UI Superhero',
    width: 370,
    height: 260,
    color: '#f05b41',
    transform: noFlipTransform,
    border: false,
  });

  const handleTextChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      text: e.value,
    }));
  };

  const handleColorChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      color: e.value,
    }));
  };

  const handleHeightChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      width: (e.value * 37) / 26,
      height: e.value,
    }));
  };

  const handleWidthChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      width: e.value,
      height: (e.value * 26) / 37,
    }));
  };

  const handleTransformChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      transform: e.value,
    }));
  };

  const handleBorderChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      border: e.value,
    }));
  };

  return (
    <React.Fragment>
      <div className="settings">
        <div className="column">
          <div className="field">
            <div className="label">Title</div>
            <div className="value">
              <TextBox
                value={state.text}
                inputAttr={titleLabel}
                onValueChanged={handleTextChange}
                maxLength={40}
                valueChangeEvent="keyup"
              />
            </div>
          </div>
          <div className="field">
            <div className="label">Color</div>
            <div className="value">
              <ColorBox
                value={state.color}
                onValueChanged={handleColorChange}
                applyValueMode="instantly"
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <div className="label">Width</div>
            <div className="value">
              <NumberBox
                value={state.width}
                onValueChanged={handleWidthChange}
                showSpinButtons={true}
                max={700}
                min={70}
                format="#0px"
                inputAttr={widthLabel}
              />
            </div>
          </div>
          <div className="field">
            <div className="label">Height</div>
            <div className="value">
              <NumberBox
                value={state.height}
                onValueChanged={handleHeightChange}
                showSpinButtons={true}
                max={700}
                min={70}
                format="#0px"
                inputAttr={heightLabel}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <div className="label">Transform</div>
            <div className="value">
              <SelectBox
                value={state.transform}
                onValueChanged={handleTransformChange}
                inputAttr={transformLabel}
                items={transformations}
                grouped={true}
                displayExpr="name"
                valueExpr="value"
              />
            </div>
          </div>

          <div className="field">
            <div className="label">Border</div>
            <div className="value">
              <Switch value={state.border} onValueChanged={handleBorderChange} />
            </div>
          </div>
        </div>
      </div>

      <Logo
        text={state.text}
        width={state.width}
        height={state.height}
        color={state.color}
        transform={state.transform}
        border={state.border}
      />
    </React.Fragment>
  );
};

export default App;
