import React from 'react';
import {
  TreeList, Editing, Column, RequiredRule, Lookup, Button,
} from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1, 2, 3, 4, 5];

const headDataSource = {
  store: employees,
  sort: 'Full_Name',
};

class App extends React.Component {
  allowDeleting(e) {
    return e.row.data.ID !== 1;
  }

  render() {
    return (
      <div id="tree-list-demo">
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
        <TreeList
          id="employees"
          dataSource={employees}
          showRowLines={true}
          showBorders={true}
          columnAutoWidth={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          onEditorPreparing={this.onEditorPreparing}
          onInitNewRow={this.onInitNewRow}
        >
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ allowUpdating: boolean; allowDeleting: (e:... Remove this comment to see the full error message
            allowUpdating={true}
            allowDeleting={this.allowDeleting}
            allowAdding={true}
            mode="row" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; }' i... Remove this comment to see the full error message
            dataField="Full_Name">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element[]; dataField: string; ca... Remove this comment to see the full error message
            dataField="Head_ID"
            caption="Head">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: { store: { ID: number; Head_ID... Remove this comment to see the full error message
              dataSource={headDataSource}
              valueExpr="ID"
              displayExpr="Full_Name" />
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
            dataField="Title"
            caption="Position">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; width: number; dataFiel... Remove this comment to see the full error message
            width={120}
            dataField="Hire_Date"
            dataType="date">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column type="buttons">
            // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
            <Button name="edit" />
            // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
            <Button name="delete" />
          </Column>
        </TreeList>
      </div>
    );
  }

  onEditorPreparing(e) {
    if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.cancel = true;
    }
  }

  onInitNewRow(e) {
    e.data.Head_ID = 1;
  }
}

export default App;
