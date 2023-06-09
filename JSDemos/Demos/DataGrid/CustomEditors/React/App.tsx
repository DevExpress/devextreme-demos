import React from 'react';
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

class App extends React.Component {
  dataField: any;

  constructor(props) {
    super(props);
    this.statusEditorRender = this.statusEditorRender.bind(this);
  }

  cellTemplate(container, options) {
    const noBreakSpace = '\u00A0';
    const text = (options.value || []).map((element) => options.column.lookup.calculateCellValue(element)).join(', ');
    container.textContent = text || noBreakSpace;
    container.title = text;
  }

  calculateFilterExpression(filterValue, selectedFilterOperation, target) {
    if (target === 'search' && typeof (filterValue) === 'string') {
      return [this.dataField, 'contains', filterValue];
    }
    return function(data) {
      return (data.AssignedEmployee || []).indexOf(filterValue) !== -1;
    };
  }

  onValueChanged(cell, e) {
    cell.setValue(e.value);
  }

  statusEditorRender(cell) {
    const onValueChanged = this.onValueChanged.bind(this, cell);
    // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
    return <SelectBox
      defaultValue={cell.value}
      {...cell.column.lookup}
      onValueChanged={onValueChanged}
      inputAttr={statusLabel}
      itemRender={this.itemRender}
    />;
  }

  itemRender(data) {
    const imageSource = `images/icons/status-${data.id}.svg`;
    if (data != null) {
      return <div>
        <img src={imageSource} className="status-icon middle"></img>
        <span className="middle">{data.name}</span>
      </div>;
    }
    return <span>(All)</span>;
  }

  onRowInserted(e) {
    e.component.navigateToRow(e.key);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={tasks}
          showBorders={true}
          onRowInserted={this.onRowInserted}
        >
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={true} defaultPageSize={15} />
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter visible={true} />
          // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
          <SearchPanel visible={true} />
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ mode: string; allowUpdating: boolean; allo... Remove this comment to see the full error message
            mode="cell"
            allowUpdating={true}
            allowAdding={true}
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element[]; dataField: string; wi... Remove this comment to see the full error message
            dataField="Owner"
            width={150}
            allowSorting={false}
            editCellComponent={EmployeeDropDownBoxComponent}
          >
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: CustomStore<any, any>; display... Remove this comment to see the full error message
              dataSource={employees}
              displayExpr="FullName"
              valueExpr="ID"
            />
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element[]; dataField: string; ca... Remove this comment to see the full error message
            dataField="AssignedEmployee"
            caption="Assignees"
            width={200}
            allowSorting={false}
            editCellComponent={EmployeeTagBoxComponent}
            cellTemplate={this.cellTemplate}
            calculateFilterExpression={this.calculateFilterExpression}>
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: CustomStore<any, any>; valueEx... Remove this comment to see the full error message
              dataSource={employees}
              valueExpr="ID"
              displayExpr="FullName"
            />
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Subject">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element[]; dataField: string; wi... Remove this comment to see the full error message
            dataField="Status"
            width={200}
            editCellRender={this.statusEditorRender}
          >
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: { id: number; name: string; }[... Remove this comment to see the full error message
              dataSource={statuses}
              displayExpr="name"
              valueExpr="id"
            />
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
        </DataGrid>
      </div>
    );
  }
}

export default App;
