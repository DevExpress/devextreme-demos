import React from 'react';
import 'devextreme-react/text-area';

import Form, { Item, GroupItem, Label } from 'devextreme-react/form';
import { Tooltip } from 'devextreme-react/tooltip';
import service from './data.js';

const employee = service.getEmployee();

const validationRules = {
  position: [
    { type: 'required', message: 'Position is required.' },
  ],
  hireDate: [
    { type: 'required', message: 'Hire Date is required.' },
  ],
};

const nameEditorOptions = { disabled: true };
const positionEditorOptions = { items: service.getPositions(), searchEnabled: true, value: '' };
const hireDateEditorOptions = { width: '100%', value: null };
const birthDateEditorOptions = { width: '100%', disabled: true };
const notesEditorOptions = { height: 90, maxLength: 200 };
const phonesEditorOptions = { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } };

export default function App() {
  const validateForm = React.useCallback((e) => {
    e.component.validate();
  }, []);

  const renderLabel = React.useCallback((iconName) => (data) => {
    <React.Fragment>
      <span><i className={`dx-icon dx-icon-${iconName}`}></i>{ data.text }</span>
    </React.Fragment>;
  }, []);

  const renderNotesLabel = React.useCallback((data) => {
    <React.Fragment>
      <span>
        <i className="dx-icon dx-icon-comment"></i>
        Additional
        <br />
        <i id="helpedInfo" className="dx-icon dx-icon-info"></i>
        { data.text }
      </span>

      <Tooltip
        target="#helpedInfo"
        showEvent="mouseenter"
        hideEvent="mouseleave"
      >
        <b>This field must not exceed 200 characters</b>
      </Tooltip>
    </React.Fragment>;
  }, []);

  return (
    <Form
      onContentReady={validateForm}
      formData={employee}>
      <GroupItem colCount={2} caption="Employee Details">
        <Item dataField="FirstName" editorOptions={nameEditorOptions}>
          <Label render={renderLabel('name')} />
        </Item>
        <Item dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions} validationRules={validationRules.position}>
          <Label render={renderLabel('info')} />
        </Item>
        <Item dataField="LastName" editorOptions={nameEditorOptions}>
          <Label render={renderLabel('name')} />
        </Item>
        <Item dataField="HireDate" editorType="dxDateBox" editorOptions={hireDateEditorOptions} validationRules={validationRules.hireDate}>
          <Label render={renderLabel('event')} />
        </Item>
        <Item dataField="BirthDate" editorType="dxDateBox" editorOptions={birthDateEditorOptions}>
          <Label render={renderLabel('event')} />
        </Item>
        <Item dataField="Address">
          <Label render={renderLabel('home')} />
        </Item>
        <Item dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
          <Label render={renderNotesLabel} />
        </Item>
        <Item dataField="Phone" editorOptions={phonesEditorOptions}>
          <Label render={renderLabel('tel')} />
        </Item>
        <Item dataField="Email">
          <Label render={renderLabel('email')} />
        </Item>
      </GroupItem>
    </Form>
  );
}
