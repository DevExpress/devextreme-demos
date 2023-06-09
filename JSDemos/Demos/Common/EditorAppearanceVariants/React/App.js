import React, { useState } from 'react';
import SelectBox from 'devextreme-react/select-box';
import TagBox from 'devextreme-react/tag-box';
import TextBox from 'devextreme-react/text-box';
import DateBox from 'devextreme-react/date-box';
import TextArea from 'devextreme-react/text-area';
import Button from 'devextreme-react/button';
import Validator, { RequiredRule } from 'devextreme-react/validator';
import notify from 'devextreme/ui/notify';
import service from './data.js';

const stylingModes = ['outlined', 'filled', 'underlined'];
const labelModes = ['static', 'floating', 'hidden'];
const notesLabel = { 'aria-label': 'Notes' };
const birthDateLabel = { 'aria-label': 'Birth Date' };
const hireDateLabel = { 'aria-label': 'Hire Date' };
const nameLabel = { 'aria-label': 'Name' };
const addressLabel = { 'aria-label': 'Address' };
const phoneLabel = { 'aria-label': 'Phone' };
const stateLabel = { 'aria-label': 'State' };
const labelModeLabel = { 'aria-label': 'Label Mode' };
const stylingModeLabel = { 'aria-label': 'Styling Mode' };

const App = () => {
  const [birthDate, setBirthDate] = useState(new Date(1981, 5, 3));
  const [stylingMode, setStylingMode] = useState('filled');
  const [labelMode, setLabelMode] = useState('static');
  const phoneRules = {
    X: /[02-9]/,
  };
  const positions = service.getPositions();
  const defaultPosition = ['Support Manager'];
  const states = service.getStates();

  const validateClick = (e) => {
    const result = e.validationGroup.validate();
    if (result.isValid) {
      notify('The task was saved successfully.', 'success');
    } else {
      notify('The task was not saved. Please check if all fields are valid.', 'error');
    }
  };

  const stylingModeChange = (e) => {
    setStylingMode(e.value);
  };

  const labelModeChange = (e) => {
    setLabelMode(e.value);
  };

  return (
    <>
      <div className="title">Edit Profile</div>
      <div className="editors">
        <div className="editors-container">
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
        </div>
        <div className="center">
          <TagBox
            items={positions}
            defaultValue={defaultPosition}
            multiline={false}
            stylingMode={stylingMode}
            width="100%"
            inputAttr={nameLabel}
            placeholder="Select..."
            label="Position"
            labelMode={labelMode}
          >
            <Validator>
              <RequiredRule />
            </Validator>
          </TagBox>
        </div>
        <div className="editors-container">
          <div className="left">
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
          <div className="right">
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
        </div>
        <div className="center">
          <TextArea
            stylingMode={stylingMode}
            defaultValue='Olivia loves to sell. She has been selling DevAV products since 2012.'
            width="100%"
            placeholder="Type..."
            label="Notes"
            labelMode={labelMode}
            inputAttr={notesLabel}
          />
        </div>
        <div className="center">
          <Button
            onClick={validateClick}
            text="Save"
            type="default"
            className="validate"
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
            onValueChanged={stylingModeChange}
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
    </>
  );
};

export default App;