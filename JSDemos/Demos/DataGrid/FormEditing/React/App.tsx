import React from 'react';

import DataGrid, {
  Column,
  FormItem,
  Editing,
  Paging,
  Lookup,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';

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
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; allo... Remove this comment to see the full error message
            mode="form"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" width={70} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={170} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="StateID" caption="State" width={125}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Notes" visible={false}>
            // @ts-expect-error TS(2786): 'FormItem' cannot be used as a JSX component.
            <FormItem colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions} />
          </Column>
        </DataGrid>
      </div>
    );
  }
}

export default App;
