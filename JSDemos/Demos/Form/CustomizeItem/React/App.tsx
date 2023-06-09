import React from 'react';
import 'devextreme-react/text-area';

import Form, { Item, GroupItem, Label } from 'devextreme-react/form';
import LabelTemplate from './LabelTemplate.js';
import LabelNotesTemplate from './LabelNotesTemplate.js';
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
const phoneEditorOptions = { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } };

export default function App() {
  const validateForm = React.useCallback((e) => {
    e.component.validate();
  }, []);

  return (
    // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
    <Form
      onContentReady={validateForm}
      formData={employee}>
      // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
      <GroupItem colCount={2} caption="Employee Details">
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="FirstName" editorOptions={nameEditorOptions}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('user')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions} validationRules={validationRules.position}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('info')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="LastName" editorOptions={nameEditorOptions}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('user')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="HireDate" editorType="dxDateBox" editorOptions={hireDateEditorOptions} validationRules={validationRules.hireDate}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('event')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="BirthDate" editorType="dxDateBox" editorOptions={birthDateEditorOptions}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('event')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="Address">
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('home')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelNotesTemplate} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="Phone" editorOptions={phoneEditorOptions}>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('tel')} />
        </Item>
        // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
        <Item dataField="Email">
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label render={LabelTemplate('email')} />
        </Item>
      </GroupItem>
    </Form>
  );
}
