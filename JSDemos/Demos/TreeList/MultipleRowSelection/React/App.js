import React from 'react';
import { TreeList, Selection, Column } from 'devextreme-react/tree-list';
import { CheckBox } from 'devextreme-react/check-box';
import { employees } from './data.js';

const expandedRowKeys = [1, 2, 10];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [],
      recursive: false,
      selectedEmployeeNames: 'Nobody has been selected'
    };

    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onRecursiveChanged = this.onRecursiveChanged.bind(this);
  }

  render() {
    const { selectedRowKeys, recursive } = this.state;
    return (
      <div>
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
          <Selection recursive={recursive} mode="multiple" />
          <Column dataField="Full_Name" />
          <Column dataField="Title" caption="Position" />
          <Column dataField="City" />
          <Column dataField="State" />
          <Column width={120} dataField="Hire_Date" dataType="date" />
        </TreeList>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <CheckBox
              value={recursive}
              text="Recursive Selection"
              onValueChanged={this.onRecursiveChanged}
            />
          </div>
          <div className="selected-data">
            <span className="caption">Selected Records:</span>{' '}
            <span>
              { this.state.selectedEmployeeNames }
            </span>
          </div>
        </div>
      </div>
    );
  }

  onSelectionChanged(e) {
    const selectedData = e.component.getSelectedRowsData('all');
    this.setState({
      selectedRowKeys: e.selectedRowKeys,
      selectedEmployeeNames: this.getEmployeeNames(selectedData)
    });
  }

  onRecursiveChanged(e) {
    this.setState({
      recursive: e.value,
      selectedRowKeys: []
    });
  }

  getEmployeeNames(employees) {
    if (employees.length > 0) {
      return employees.map(employee => employee.Full_Name).join(', ');
    } else {
      return 'Nobody has been selected';
    }
  }
}

export default App;
