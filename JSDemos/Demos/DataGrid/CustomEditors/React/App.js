import React, { useState } from 'react';
import DataGrid, {
  Paging,
  HeaderFilter,
  SearchPanel,
  Editing,
  Column,
  Lookup,
  RequiredRule,
} from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import SelectBox from 'devextreme-react/select-box';
import { statuses } from './data.js';
import EmployeeDropDownBoxComponent from './EmployeeDropDownBoxComponent.js';
import EmployeeTagBoxComponent from './EmployeeTagBoxComponent.js';

const url = 'https://js.devexpress.com/Demos/Mvc/api/CustomEditors';
const statusLabel = { 'aria-label': 'Status' };

const employees = createStore({
  key: 'ID',
  loadUrl: `${url}/Employees`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const tasks = createStore({
  key: 'ID',
  loadUrl: `${url}/Tasks`,
  updateUrl: `${url}/UpdateTask`,
  insertUrl: `${url}/InsertTask`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const App = () => {
  const [cellTemplate, setCellTemplate] = useState(() => {
    const noBreakSpace = '\u00A0';
    const text = (options.value || []).map((element) => options.column.lookup.calculateCellValue(element)).join(', ');
    container.textContent = text || noBreakSpace;
    container.title = text;
  });

  const [calculateFilterExpression, setCalculateFilterExpression] = useState((filterValue, selectedFilterOperation, target) => {
    if (target === 'search' && typeof (filterValue) === 'string') {
      return [this.dataField, 'contains', filterValue];
    }
    return function(data) {
      return (data.AssignedEmployee || []).indexOf(filterValue) !== -1;
    };
  });

  const [onValueChanged, setOnValueChanged] = useState((cell, e) => {
    cell.setValue(e.value);
  });

  const [statusEditorRender, setStatusEditorRender] = useState((cell) => {
    const onValueChanged = onValueChanged.bind(this, cell);
    return <SelectBox
      defaultValue={cell.value}
      {...cell.column.lookup}
      onValueChanged={onValueChanged}
      inputAttr={statusLabel}
      itemRender={itemRender}
    />;
  });

  const [itemRender, setItemRender] = useState((data) => {
    const imageSource = `images/icons/status-${data.id}.svg`;
    if (data != null) {
      return <div>
        <img src={imageSource} className="status-icon middle"></img>
        <span className="middle">{data.name}</span>
      </div>;
    }
    return <span>(All)</span>;
  });

  const onRowInserted = (e) => {
    e.component.navigateToRow(e.key);
  };

  return (
    <div>
      <DataGrid
        dataSource={tasks}
        showBorders={true}
        onRowInserted={onRowInserted}
      >
        <Paging enabled={true} defaultPageSize={15} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} />
        <Editing
          mode="cell"
          allowUpdating={true}
          allowAdding={true}
        />
        <Column
          dataField="Owner"
          width={150}
          allowSorting={false}
          editCellComponent={EmployeeDropDownBoxComponent}
        >
          <Lookup
            dataSource={employees}
            displayExpr="FullName"
            valueExpr="ID"
          />
          <RequiredRule />
        </Column>
        <Column
          dataField="AssignedEmployee"
          caption="Assignees"
          width={200}
          allowSorting={false}
          editCellComponent={EmployeeTagBoxComponent}
          cellTemplate={cellTemplate}
          calculateFilterExpression={calculateFilterExpression}>
          <Lookup
            dataSource={employees}
            valueExpr="ID"
            displayExpr="FullName"
          />
          <RequiredRule />
        </Column>
        <Column dataField="Subject">
          <RequiredRule />
        </Column>
        <Column
          dataField="Status"
          width={200}
          editCellRender={statusEditorRender}
        >
          <Lookup
            dataSource={statuses}
            displayExpr="name"
            valueExpr="id"
          />
          <RequiredRule />
        </Column>
      </DataGrid>
    </div>
  );
};

export default App;
