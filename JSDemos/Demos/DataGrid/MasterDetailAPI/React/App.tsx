import React from 'react';
import DataGrid, {
  Column,
  MasterDetail,
  Selection,
} from 'devextreme-react/data-grid';
import { employees } from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.contentReady = this.contentReady.bind(this);
    this.selectionChanged = this.selectionChanged.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="grid-container"
        dataSource={employees}
        keyExpr="ID"
        onSelectionChanged={this.selectionChanged}
        onContentReady={this.contentReady}
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
        <Selection mode="single" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Prefix" width={70} caption="Title" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FirstName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="LastName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Position" width={170} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" width={125} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="BirthDate" dataType="date" />
        // @ts-expect-error TS(2786): 'MasterDetail' cannot be used as a JSX component.
        <MasterDetail enabled={false} render={renderDetail} />
      </DataGrid>
    );
  }

  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length) { e.component.selectRowsByIndexes(0); }
  }

  selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
  }
}

function renderDetail(props) {
  const { Picture, Notes } = props.data;
  return (
    <div className="employee-info">
      <img className="employee-photo" src={Picture} />
      <p className="employee-notes">{Notes}</p>
    </div>
  );
}

export default App;
