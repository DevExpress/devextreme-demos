import React from 'react';

import DataGrid, {
  Column,
  Selection,
  Toolbar,
  Item,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import Button from 'devextreme-react/button';
import { employees, titleLabel } from './data.js';

const titles = ['All', 'Dr.', 'Mr.', 'Mrs.', 'Ms.'];

class App extends React.Component {
  dataGrid: any;

  selectionChangedBySelectBox: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.dataGrid = null;
    this.selectionChangedBySelectBox = false;

    this.state = {
      prefix: '',
      selectedEmployeeNames: 'Nobody has been selected',
      selectedRowKeys: [],
    };

    this.onClearButtonClicked = this.onClearButtonClicked.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onSelectionFilterChanged = this.onSelectionFilterChanged.bind(this);
  }

  render() {
    const {
      prefix, selectedRowKeys, selectedEmployeeNames,
    } = this.state;

    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="grid-container"
          dataSource={employees}
          keyExpr="ID"
          onSelectionChanged={this.onSelectionChanged}
          ref={(ref) => { this.dataGrid = ref; }}
          selectedRowKeys={selectedRowKeys}
          showBorders={true}
        >
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="multiple" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Prefix" caption="Title" width={70} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="FirstName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="LastName" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Position" width={180} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="BirthDate" dataType="date" width={125} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="HireDate" dataType="date" width={125} />
          // @ts-expect-error TS(2786): 'Toolbar' cannot be used as a JSX component.
          <Toolbar>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
              <SelectBox
                dataSource={titles}
                inputAttr={titleLabel}
                // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
                onValueChanged={this.onSelectionFilterChanged}
                placeholder="Select title"
                width={150}
                value={prefix}
              />
            </Item>
            // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
            <Item location="before">
              // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
              <Button
                disabled={!selectedRowKeys.length}
                onClick={this.onClearButtonClicked}
                text="Clear Selection"
              />
            </Item>
          </Toolbar>
        </DataGrid>
        <div className="selected-data">
          <span className="caption">Selected Records:</span>{' '}
          <span>
            { selectedEmployeeNames }
          </span>
        </div>
      </div>
    );
  }

  onSelectionChanged({ selectedRowKeys, selectedRowsData }) {
    this.selectionChangedBySelectBox = false;

    this.setState({
      prefix: null,
      selectedEmployeeNames: getEmployeeNames(selectedRowsData),
      selectedRowKeys,
    });
  }

  onClearButtonClicked() {
    this.dataGrid.instance.clearSelection();
  }

  onSelectionFilterChanged({ value }) {
    this.selectionChangedBySelectBox = true;

    const prefix = value;

    if (prefix) {
      const filteredEmployees = prefix === 'All' ? employees : employees.filter((employee) => employee.Prefix === prefix);
      const selectedRowKeys = filteredEmployees.map((employee) => employee.ID);

      this.setState({
        prefix,
        selectedRowKeys,
        selectedEmployeeNames: getEmployeeNames(filteredEmployees),
      });
    }
  }
}

function getEmployeeName(row) {
  return `${row.FirstName} ${row.LastName}`;
}

function getEmployeeNames(selectedRowsData) {
  return selectedRowsData.length ? selectedRowsData.map(getEmployeeName).join(', ') : 'Nobody has been selected';
}

export default App;
