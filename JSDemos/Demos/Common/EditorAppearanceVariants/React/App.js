import React from 'react';

import SelectBox from 'devextreme-react/select-box';
import TextBox from 'devextreme-react/text-box';
import DateBox from 'devextreme-react/date-box';
import TextArea from 'devextreme-react/text-area';
import Button from 'devextreme-react/button';
import Validator, { RequiredRule } from 'devextreme-react/validator';
import notify from 'devextreme/ui/notify';

import {
  states, stylingModes, labelModes, notesLabel,
  birthDateLabel, hireDateLabel,
  nameLabel, addressLabel, phoneLabel,
  stateLabel, labelModeLabel, stylingModeLabel,
} from './data.js';

const birthDate = new Date(1981, 5, 3);
const phoneRules = {
  X: /[02-9]/,
};

function validateClick(e) {
  const result = e.validationGroup.validate();
  if (result.isValid) {
    notify('The task was saved successfully.', 'success');
  } else {
    notify('The task was not saved. Please check if all fields are valid.', 'error');
  }
}

export default function App() {
  const [stylingMode, setStylingMode] = React.useState('filled');
  const [labelMode, setLabelMode] = React.useState('static');
  const changeStylingMode = React.useCallback(({ value }) => {
    setStylingMode(value);
  }, []);
  const labelModeChange = React.useCallback(({ value }) => {
    setLabelMode(value);
  }, []);

  return (
    <React.Fragment>
      <div className="title">Edit Profile</div>
      <div className="editors">
        <div className="flex-container editors-padding-right">
          <div className="left">
            <TextBox
              stylingMode={stylingMode}
              defaultValue="Olivia Peyton"
              width="100%"
              inputAttr={nameLabel}
              placeholder="Type..."
              label="Name"
              labelMode={labelMode}
            >
              <Validator>
                <RequiredRule />
              </Validator>
            </TextBox>
            <TextBox
              stylingMode={stylingMode}
              width="100%"
              placeholder="Type..."
              inputAttr={addressLabel}
              label="Address"
              labelMode={labelMode}
            >
              <Validator>
                <RequiredRule />
              </Validator>
            </TextBox>
            <DateBox
              stylingMode={stylingMode}
              width="100%"
              placeholder="Select..."
              label="Hire Date"
              inputAttr={hireDateLabel}
              labelMode={labelMode}
            >
              <Validator>
                <RequiredRule />
              </Validator>
            </DateBox>
          </div>
          <div className="right">
            <DateBox
              defaultValue={birthDate}
              stylingMode={stylingMode}
              width="100%"
              placeholder="Birth Date"
              label="Birth Date"
              inputAttr={birthDateLabel}
              labelMode={labelMode}
            >
              <Validator>
                <RequiredRule />
              </Validator>
            </DateBox>
            <div className="flex-container">
              <div className="state-select-box">
                <SelectBox
                  items={states}
                  stylingMode={stylingMode}
                  inputAttr={stateLabel}
                  width="100%"
                  placeholder="Select..."
                  label="State"
                  labelMode={labelMode}
                >
                  <Validator>
                    <RequiredRule />
                  </Validator>
                </SelectBox>
              </div>
              <TextBox
                stylingMode={stylingMode}
                width="100%"
                mask="+1 (000) 000-0000"
                inputAttr={phoneLabel}
                maskRules={phoneRules}
                label="Phone"
                labelMode={labelMode}
              >
                <Validator>
                  <RequiredRule />
                </Validator>
              </TextBox>
            </div>
          </div>
        </div>
        <div className="editors-padding-right center">
          <TextArea
            stylingMode={stylingMode}
            defaultValue='Olivia loves to sell. She has been selling DevAV products since 2012.'
            width="100%"
            placeholder="Type..."
            label="Notes"
            labelMode={labelMode}
            inputAttr={notesLabel}
          />
          <Button
            onClick={validateClick}
            text="Save"
            icon="save"
            type="default"
            className="save-button"
          />
        </div>
      </div>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <label>Styling Mode</label>
          <SelectBox
            stylingMode={stylingMode}
            items={stylingModes}
            inputAttr={stylingModeLabel}
            value={stylingMode}
            onValueChanged={changeStylingMode}
          />
        </div>
        <div className="option">
          <label>Label Mode</label>
          <SelectBox
            stylingMode={stylingMode}
            items={labelModes}
            inputAttr={labelModeLabel}
            value={labelMode}
            onValueChanged={labelModeChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
