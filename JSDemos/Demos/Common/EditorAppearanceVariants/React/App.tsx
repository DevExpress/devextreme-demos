import React from 'react';

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

class App extends React.Component {
  defaultPosition: any;

  phoneRules: any;

  positions: any;

  setState: any;

  state: any;

  states: any;

  constructor(props) {
    super(props);

    this.state = {
      birthDate: new Date(1981, 5, 3),
      stylingMode: 'filled',
      labelMode: 'static',
    };

    this.phoneRules = {
      X: /[02-9]/,
    };

    this.positions = service.getPositions();
    this.defaultPosition = ['Support Manager'];

    this.states = service.getStates();

    this.validateClick = this.validateClick.bind(this);
    this.stylingModeChange = this.stylingModeChange.bind(this);
    this.labelModeChange = this.labelModeChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="title">Edit Profile</div>
        <div className="editors">
          <div className="editors-container">
            <div className="left">
              // @ts-expect-error TS(2786): 'TextBox' cannot be used as a JSX component.
              <TextBox
                stylingMode={this.state.stylingMode}
                defaultValue="Olivia Peyton"
                width="100%"
                inputAttr={nameLabel}
                placeholder="Type..."
                label="Name"
                labelMode={this.state.labelMode}
              >
                // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
                <Validator>
                  // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                  <RequiredRule />
                </Validator>
              </TextBox>
              // @ts-expect-error TS(2786): 'TextBox' cannot be used as a JSX component.
              <TextBox
                stylingMode={this.state.stylingMode}
                width="100%"
                placeholder="Type..."
                inputAttr={addressLabel}
                label="Address"
                labelMode={this.state.labelMode}
              >
                // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
                <Validator>
                  // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                  <RequiredRule />
                </Validator>
              </TextBox>
            </div>
            <div className="right">
              // @ts-expect-error TS(2786): 'DateBox' cannot be used as a JSX component.
              <DateBox
                defaultValue={this.state.birthDate}
                stylingMode={this.state.stylingMode}
                width="100%"
                placeholder="Birth Date"
                label="Birth Date"
                inputAttr={birthDateLabel}
                labelMode={this.state.labelMode}
              >
                // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
                <Validator>
                  // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                  <RequiredRule />
                </Validator>
              </DateBox>
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                items={this.states}
                stylingMode={this.state.stylingMode}
                inputAttr={stateLabel}
                width="100%"
                placeholder="Select..."
                label="State"
                labelMode={this.state.labelMode}
              >
                // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
                <Validator>
                  // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                  <RequiredRule />
                </Validator>
              </SelectBox>
            </div>
          </div>
          <div className="center">
            // @ts-expect-error TS(2786): 'TagBox' cannot be used as a JSX component.
            <TagBox
              items={this.positions}
              defaultValue={this.defaultPosition}
              multiline={false}
              stylingMode={this.state.stylingMode}
              width="100%"
              inputAttr={nameLabel}
              placeholder="Select..."
              label="Position"
              labelMode={this.state.labelMode}
            >
              // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
              <Validator>
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule />
              </Validator>
            </TagBox>
          </div>
          <div className="editors-container">
            <div className="left">
              // @ts-expect-error TS(2786): 'TextBox' cannot be used as a JSX component.
              <TextBox
                stylingMode={this.state.stylingMode}
                width="100%"
                mask="+1 (000) 000-0000"
                inputAttr={phoneLabel}
                maskRules={this.phoneRules}
                label="Phone"
                labelMode={this.state.labelMode}
              >
                // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
                <Validator>
                  // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                  <RequiredRule />
                </Validator>
              </TextBox>
            </div>
            <div className="right">
              // @ts-expect-error TS(2786): 'DateBox' cannot be used as a JSX component.
              <DateBox
                stylingMode={this.state.stylingMode}
                width="100%"
                placeholder="Select..."
                label="Hire Date"
                inputAttr={hireDateLabel}
                labelMode={this.state.labelMode}
              >
                // @ts-expect-error TS(2786): 'Validator' cannot be used as a JSX component.
                <Validator>
                  // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                  <RequiredRule />
                </Validator>
              </DateBox>
            </div>
          </div>
          <div className="center">
            // @ts-expect-error TS(2786): 'TextArea' cannot be used as a JSX component.
            <TextArea
              stylingMode={this.state.stylingMode}
              defaultValue='Olivia loves to sell. She has been selling DevAV products since 2012.'
              width="100%"
              placeholder="Type..."
              label="Notes"
              labelMode={this.state.labelMode}
              inputAttr={notesLabel}
            />
          </div>
          <div className="center">
            // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
            <Button
              onClick={this.validateClick}
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
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              stylingMode={this.state.stylingMode}
              items={stylingModes}
              inputAttr={stylingModeLabel}
              value={this.state.stylingMode}
              onValueChanged={this.stylingModeChange}
            />
          </div>
          <div className="option">
            <label>Label Mode</label>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              stylingMode={this.state.stylingMode}
              items={labelModes}
              inputAttr={labelModeLabel}
              value={this.state.labelMode}
              onValueChanged={this.labelModeChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  validateClick(e) {
    const result = e.validationGroup.validate();
    if (result.isValid) {
      notify('The task was saved successfully.', 'success');
    } else {
      notify('The task was not saved. Please check if all fields are valid.', 'error');
    }
  }

  stylingModeChange(e) {
    this.setState({
      stylingMode: e.value,
    });
  }

  labelModeChange(e) {
    this.setState({
      labelMode: e.value,
    });
  }
}

export default App;
