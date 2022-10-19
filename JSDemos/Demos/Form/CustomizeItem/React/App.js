import React from 'react';
import 'devextreme-react/text-area';

import Form, { Item, GroupItem } from 'devextreme-react/form';
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

  return (
    <Form
      onContentReady={validateForm}
      formData={employee}>
      <GroupItem colCount={2} caption="Employee Details">
        <Item dataField="FirstName" editorOptions={nameEditorOptions} />
        <Item dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions} validationRules={validationRules.position} />
        <Item dataField="LastName" editorOptions={nameEditorOptions} />
        <Item dataField="HireDate" editorType="dxDateBox" editorOptions={hireDateEditorOptions} validationRules={validationRules.hireDate} />
        <Item dataField="BirthDate" editorType="dxDateBox" editorOptions={birthDateEditorOptions} />
        <Item dataField="Address" />
        <Item dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions} />
        <Item dataField="Phone" editorOptions={phonesEditorOptions} />
        <Item dataField="Email" />
      </GroupItem>
    </Form>
  );
}
