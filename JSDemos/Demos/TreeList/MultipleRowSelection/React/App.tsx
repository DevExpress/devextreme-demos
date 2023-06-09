import React from 'react';
import { TreeList, Selection, Column } from 'devextreme-react/tree-list';
import { CheckBox } from 'devextreme-react/check-box';
import { SelectBox } from 'devextreme-react/select-box';
import { employees, selectionModeLabel } from './data.js';

const expandedRowKeys = [1, 2, 10];
const emptySelectedText = 'Nobody has been selected';
const selectionModes = ['all', 'excludeRecursive', 'leavesOnly'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [],
      recursive: false,
      selectedEmployeeNames: emptySelectedText,
      selectionMode: 'all',
    };

    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onRecursiveChanged = this.onRecursiveChanged.bind(this);
    this.onSelectionModeChanged = this.onSelectionModeChanged.bind(this);
  }

  render() {
    const {
      selectedRowKeys, recursive, selectionMode, selectedEmployeeNames,
    } = this.state;
    return (
      <div>
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
        <TreeList
          id="employees"
          dataSource={employees}
          showRowLines={true}
          showBorders={true}
          columnAutoWidth={true}
          defaultExpandedRowKeys={expandedRowKeys}
          selectedRowKeys={selectedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          onSelectionChanged={this.onSelectionChanged}
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection recursive={recursive} mode="multiple" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Full_Name" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Title" caption="Position" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column width={120} dataField="Hire_Date" dataType="date" />
        </TreeList>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Selection Mode</span>{' '}
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              value={selectionMode}
              items={selectionModes}
              inputAttr={selectionModeLabel}
              text="Recursive Selection"
              onValueChanged={this.onSelectionModeChanged}
            />
          </div>
          <div className="option">
            // @ts-expect-error TS(2786): 'CheckBox' cannot be used as a JSX component.
            <CheckBox
              value={recursive}
              text="Recursive Selection"
              onValueChanged={this.onRecursiveChanged}
            />
          </div>
          <div className="selected-data">
            <span className="caption">Selected Records:</span>{' '}
            <span>
              { selectedEmployeeNames }
            </span>
          </div>
        </div>
      </div>
    );
  }

  onSelectionChanged(e) {
    const selectedData = e.component.getSelectedRowsData(this.state.selectionMode);
    this.setState({
      selectedRowKeys: e.selectedRowKeys,
      selectedEmployeeNames: this.getEmployeeNames(selectedData),
    });
  }

  onRecursiveChanged(e) {
    this.setState({
      recursive: e.value,
      selectedRowKeys: [],
      selectedEmployeeNames: emptySelectedText,
    });
  }

  onSelectionModeChanged(e) {
    this.setState({
      selectionMode: e.value,
      selectedRowKeys: [],
      selectedEmployeeNames: emptySelectedText,
    });
  }

  getEmployeeNames(employeeList) {
    if (employeeList.length > 0) {
      return employeeList.map((employee) => employee.Full_Name).join(', ');
    }
    return emptySelectedText;
  }
}

export default App;
