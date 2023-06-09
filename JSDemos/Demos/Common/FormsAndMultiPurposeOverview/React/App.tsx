import React from 'react';

import Form, {
  SimpleItem,
  GroupItem,
  Label,
} from 'devextreme-react/form';
import { employee, positions, states } from './data.js';

import 'devextreme-react/text-area';

class App extends React.Component {
  birthDateOptions: any;

  notesOptions: any;

  phoneOptions: any;

  positionOptions: any;

  stateOptions: any;

  constructor(props) {
    super(props);
    this.birthDateOptions = { width: '100%' };
    this.positionOptions = {
      items: positions,
      value: '',
    };
    this.stateOptions = {
      items: states,
    };
    this.phoneOptions = { mask: '+1 (000) 000-0000' };
    this.notesOptions = { height: 140 };
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
      <Form formData={employee}>
        // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
        <GroupItem cssClass="first-group" colCount={4}>
          // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
          <SimpleItem render={avatarRender}>
          </SimpleItem>
          // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
          <GroupItem colSpan={3}>
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem dataField="FirstName" />
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem dataField="LastName" />
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem
              // @ts-expect-error TS(2322): Type '{ dataField: string; editorType: string; edi... Remove this comment to see the full error message
              dataField="BirthDate"
              editorType="dxDateBox"
              editorOptions={this.birthDateOptions}
            />
          </GroupItem>
        </GroupItem>
        // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
        <GroupItem cssClass="second-group" colCount={2}>
          // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
          <GroupItem>
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem dataField="Address" />
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem dataField="City" />
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem dataField="Position"
              editorType="dxSelectBox"
              editorOptions={this.positionOptions} />
          </GroupItem>
          // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
          <GroupItem>
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem
              // @ts-expect-error TS(2322): Type '{ dataField: string; editorType: string; edi... Remove this comment to see the full error message
              dataField="State"
              editorType="dxSelectBox"
              editorOptions={this.stateOptions} />
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem dataField="ZipCode" />
            // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
            <SimpleItem
              // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; edit... Remove this comment to see the full error message
              dataField="Mobile"
              editorOptions={this.phoneOptions}>
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label text="Phone" />
            </SimpleItem>
          </GroupItem>
          // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
          <SimpleItem
            // @ts-expect-error TS(2322): Type '{ colSpan: number; dataField: string; editor... Remove this comment to see the full error message
            colSpan={2}
            dataField="Notes"
            editorType="dxTextArea"
            editorOptions={this.notesOptions}
          />
        </GroupItem>
      </Form>
    );
  }
}

function avatarRender() {
  return (
    <div className="form-avatar"></div>
  );
}

export default App;
