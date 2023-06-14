import React, { useState } from 'react';
import DataGrid, {
  Column,
  MasterDetail,
  Selection,
} from 'devextreme-react/data-grid';
import { employees } from './data.js';

function App() {
  const [selectedRow, setSelectedRow] = useState(null);

  const contentReady = (e) => {
    if (!e.component.getSelectedRowKeys().length) { e.component.selectRowsByIndexes(0); }
  };

  const selectionChanged = (e) => {
    e.component.collapseAll(-1);
    setSelectedRow(e.currentSelectedRowKeys[0]);
    e.component.expandRow(selectedRow);
  };

  const renderDetail = (props) => {
    const { Picture, Notes } = props.data;
    return (
      <div className="employee-info">
        <img className="employee-photo" src={Picture} />
        <p className="employee-notes">{Notes}</p>
      </div>
    );
  };

  return (
    <DataGrid
      id="grid-container"
      dataSource={employees}
      keyExpr="ID"
      onSelectionChanged={selectionChanged}
      onContentReady={contentReady}
      showBorders={true}
    >
      <Selection mode="single" />
      <Column dataField="Prefix" width={70} caption="Title" />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column dataField="Position" width={170} />
      <Column dataField="State" width={125} />
      <Column dataField="BirthDate" dataType="date" />
      <MasterDetail enabled={false} render={renderDetail} />
    </DataGrid>
  );
}

export default App;
