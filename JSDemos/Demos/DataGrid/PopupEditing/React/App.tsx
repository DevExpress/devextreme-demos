import React from 'react';

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { employees, states } from './data.js';

const notesEditorOptions = { height: 100 };

class App extends React.Component {
  render() {
    return (
      <div id="data-grid-demo">
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={false} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ children: Element[]; mode: string; allowUp... Remove this comment to see the full error message
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            // @ts-expect-error TS(2786): 'Popup' cannot be used as a JSX component.
            <Popup title="Employee Info" showTitle={true} width={700} height={525} />
            // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
            <Form>
              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item itemType="group" colCount={2} colSpan={2}>
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="FirstName" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="LastName" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="Prefix" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="BirthDate" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="Position" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="HireDate" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item
                  // @ts-expect-error TS(2322): Type '{ dataField: string; editorType: string; col... Remove this comment to see the full error message
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
                  editorOptions={notesEditorOptions} />
              </Item>

              // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="StateID" />
                // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
                <Item dataField="Address" />
              </Item>
            </Form>
          </Editing>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" width={70} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={170} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="HireDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StateID" caption="State" width={125}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Address" visible={false} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Notes" visible={false} />
        </DataGrid>
      </div>
    );
  }
}

export default App;
