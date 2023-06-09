import React from 'react';
import {
  TreeList, Editing, Column, ValidationRule, Lookup, Button,
} from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

const popupOptions = {
  title: 'Employee Info',
  showTitle: true,
  width: 700,
};

const lookupData = {
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
          dataSource={employees}
          columnAutoWidth={true}
          showRowLines={true}
          showBorders={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          onEditorPreparing={this.onEditorPreparing}
          onInitNewRow={this.onInitNewRow}
        >
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing allowUpdating={true} allowDeleting={this.allowDeleting} allowAdding={true} popup={popupOptions} mode="popup" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Full_Name">
            // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValidationRule type="required" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title">
            // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValidationRule type="required" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column visible={false} dataField="Head_ID" caption="Head">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup dataSource={lookupData} valueExpr="ID" displayExpr="Full_Name" />
            // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValidationRule type="required" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Title" caption="Position">
            // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValidationRule type="required" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column width={150} dataField="City">
            // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValidationRule type="required" />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column width={120} dataField="Hire_Date" dataType="date">
            // @ts-expect-error TS(2786): 'ValidationRule' cannot be used as a JSX component... Remove this comment to see the full error message
            <ValidationRule type="required" />
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
      e.editorOptions.disabled = true;
      e.editorOptions.value = null;
    }
  }

  onInitNewRow(e) {
    e.data.Head_ID = 1;
  }
}

export default App;
