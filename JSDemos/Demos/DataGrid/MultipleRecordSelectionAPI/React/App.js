import React, { useState, useRef } from 'react';
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

function App() {
  const [prefix, setPrefix] = useState('');
  const [selectedEmployeeNames, setSelectedEmployeeNames] = useState('Nobody has been selected');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dataGridRef = useRef(null);
  let selectionChangedBySelectBox = false;

  const onClearButtonClicked = () => {
    dataGridRef.current.instance.clearSelection();
  };

  const onSelectionChanged = ({ selectedRowKeys, selectedRowsData }) => {
    selectionChangedBySelectBox = false;

    setPrefix(null);
    setSelectedEmployeeNames(getEmployeeNames(selectedRowsData));
    setSelectedRowKeys(selectedRowKeys);
  };

  const onSelectionFilterChanged = ({ value }) => {
    selectionChangedBySelectBox = true;

    const prefix = value;

    if (prefix) {
      const filteredEmployees = prefix === 'All' ? employees : employees.filter((employee) => employee.Prefix === prefix);
      const selectedRowKeys = filteredEmployees.map((employee) => employee.ID);

      setPrefix(prefix);
      setSelectedRowKeys(selectedRowKeys);
      setSelectedEmployeeNames(getEmployeeNames(filteredEmployees));
    }
  };

  return (
    <div>
      <DataGrid
        id="grid-container"
        dataSource={employees}
        keyExpr="ID"
        onSelectionChanged={onSelectionChanged}
        ref={dataGridRef}
        selectedRowKeys={selectedRowKeys}
        showBorders={true}
      >
        <Selection mode="multiple" />
        <Column dataField="Prefix" caption="Title" width={70} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={180} />
        <Column dataField="BirthDate" dataType="date" width={125} />
        <Column dataField="HireDate" dataType="date" width={125} />
        <Toolbar>
          <Item location="before">
            <SelectBox
              dataSource={titles}
              inputAttr={titleLabel}
              onValueChanged={onSelectionFilterChanged}
              placeholder="Select title"
              width={150}
              value={prefix}
            />
          </Item>
          <Item location="before">
            <Button
              disabled={!selectedRowKeys.length}
              onClick={onClearButtonClicked}
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

function getEmployeeName(row) {
  return `${row.FirstName} ${row.LastName}`;
}

function getEmployeeNames(selectedRowsData) {
  return selectedRowsData.length ? selectedRowsData.map(getEmployeeName).join(', ') : 'Nobody has been selected';
}

export default App;